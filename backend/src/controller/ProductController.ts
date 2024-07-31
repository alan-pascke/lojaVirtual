import { Request, Response } from 'express';
import { Product } from '../models/Product';

export default class ProductController { 

    static async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            res.send('Erro ao buscar produtos '+ error);
        }
    }

    static async getProductById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const product = await Product.findOne({ where: { id } });
            res.json(product);
        } catch (error) {
            res.send('Erro ao buscar o produto '+ error);
        }
    }

    static async createProduct(req: any, res: any): Promise<void> {
        const { name, price } = req.body;
        try {
            const product = await Product.create({ name, price });
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar o produto '+ error });
        }
    }
    
    static async updateProduct(req: any, res: any): Promise<void> {
        const { id } = req.params;
        const product = req.body;
        try {
            // const product = await Product.update({ ...product }, { where: { id } });
            return res.json(product);
        } catch (error) {
            res.send('Erro ao atualizar o produto '+ error);
        }
    }

    static async deleteProduct(req: any, res: any): Promise<void> {
        const { id } = req.params;
        try {
            const product = await Product.destroy({ where: { id } });
            res.status(200).json(product);
        } catch (error) {
            res.send('Erro ao deletar o produto '+ error);
        }
    }
}