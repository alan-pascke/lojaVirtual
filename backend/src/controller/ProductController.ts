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
        // const { brand, model, color, description, price, category_id } = req.body;
        const products = req.body;

     

        try {
            products.map(async (product: Product) => {
                await Product.create({ 
                    brand: product.brand,
                    model: product.model,
                    color: product.color,
                    description: product.description, 
                    price: product.price.toFixed(2),
                    category_id: product.category_id
                });
            })

            res.status(201).json(products.map((product: any) => product));
        } catch (error){
            res.status(400).json({ error: 'Erro ao criar os produtos '+ error });
        }
      
        // try {
        //     const product = await Product.create({ 
        //         name,
        //         description, 
        //         price,
        //         category_id
        //     });
        //     res.status(201).json(product);
        // } catch (error) {
        //     res.status(400).json({ error: 'Erro ao criar o produto '+ error });
        // }
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