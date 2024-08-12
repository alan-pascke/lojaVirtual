import { Request, Response } from 'express';
import { User } from "../models/User";
import { hash } from "bcrypt";


export default class UserController {

    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.send('Erro ao buscar usuários '+ error);
        }
    }

    static async getUserById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const user = await User.findOne({ where: { id } });
            res.json(user);
        } catch (error) {
            res.send('Erro ao buscar usuário '+ error);
        }
    }

    static async createUser(req: any, res: any) {

        const { name, email, password } = req.body;
    
        const checkUserExists = await User.findOne({ where: { email: email } });

        if (checkUserExists) {
            return res.status(400).json({ error: 'Usuário ja existe' });
        } 
    
        try {

            const hashedPassword = await hash(password, 10);

            await User.create({
                name,
                email,
                password: hashedPassword
            })
            
            res.status(200).json({ message: `Usuário "${name}" foi criado com sucesso!` });
            
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar usuário '+ error });
        }
    }

    static async updateUser(req: any, res: any): Promise<void> {
        const { id } = req.params;
        const user = req.body;
        try {
            // const user = await User.update({ ...user }, { where: { id } });
            return res.json(user);
        } catch (error) {
            res.send('Erro ao atualizar usuário ', error);
        }
    }

    static async deleteUser(req: any, res: any): Promise<void> {
        const { id } = req.params;
        try {
            const user = await User.destroy({ where: { id } });
            return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
        } catch (error) {
            res.status(400).json({ error: 'Erro ao deletar usuário '+ error });
        }
    }
}
