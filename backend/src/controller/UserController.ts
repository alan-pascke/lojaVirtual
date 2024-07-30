import User from "../models/User";
import { hash } from "bcrypt";


export default class UserController {

    static async getAllUsers(req: any, res: any) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (error) {
            res.send('Erro ao buscar usuários ', error);
        }
    }

    static async createUser(req: any, res: any) {
        const { name, email, password } = req.body;
        try {

            const checkUserExists = await User.findOne({ where: { email: email } });
            if (checkUserExists) {
                return res.status(400).json({ error: 'Usuário ja existe' });
            } else {
                const hashedPassword = hash(password, 10);

                const newUser = await User.create({
                    name,
                    email,
                    password: hashedPassword
                })                
            }

            const user = await User.create(req.body);
            return res.json(user);
        } catch (error) {
            res.send('Erro ao criar usuário ', error);
        }
    }

    static async updateUser(req: any, res: any) {
        const { id } = req.params;
        const user = req.body;
        try {
            // const user = await User.update({ ...user }, { where: { id } });
            return res.json(user);
        } catch (error) {
            res.send('Erro ao atualizar usuário ', error);
        }
    }
}
