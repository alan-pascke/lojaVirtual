import { Request, Response } from 'express';
import { User } from "../models/User";
import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config()

export default class AuthUserController {
    
    static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        
        try {
            const user = await User.findOne({ where: { email } });
            
            if (!user) {
                return res.status(404).json({ error: 'Email não está cadastrado!' });
            } 
    
            const passwordMatched = await compare(password, user.password) 
    
            if (!passwordMatched) { 
                return res.status(401).json({error: 'Senha invalida!'})
            } 

            if (!process.env.API_TOKEN_ACCESS) {
              throw new Error('API_TOKEN_ACCESS environment variable is not set');
            }
            const token = jwt.sign({ id: user.id }, process.env.API_TOKEN_ACCESS, { expiresIn: '24h' });

            return res.cookie('token', token, { 
                httpOnly: true, 
                maxAge: 3600000 * 24,
                sameSite: 'strict',
            }).status(200).json({ message: 'Login bem-sucedido!' });
            
        } catch (error) {
            return res.status(401).json({ error: 'Houve um erro :' + error });
        }
    }
 
    static async checkAuth(req: Request, res: Response) {
        try {
    
            const token = req.cookies.token;

            if (!token) {
                return res.status(401).json({ authenticated: false });
            }

            if (!process.env.API_TOKEN_ACCESS) {
                throw new Error('API_TOKEN_ACCESS environment variable is not set');
            }

            jwt.verify(token, process.env.API_TOKEN_ACCESS, (err: any, decoded: any) => {
                if (err) {
                    return res.status(401).json({ authenticated: false });
                }
                return res.status(200).json({ authenticated: true, userId: (decoded as any).id });
            });
        } catch (error) {
            return res.status(500).json({ error: 'Erro no servidor', authenticated: false });
        }
    }
}

