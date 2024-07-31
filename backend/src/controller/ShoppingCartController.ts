import { Request, Response } from "express";
import { ShoppingCart } from "../models/ShoppingCart";
import { ShoppingCartProduct } from "../models/ShoppingCartProduct";


export default class ShoppingCartController { 

    async getAllShoppingCarts(req: Request, res: Response): Promise<void> {
        try {
            const shoppingCarts = await ShoppingCart.findAll({
                include: [ShoppingCartProduct],
            });
            res.json(shoppingCarts);  
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getShoppingCartById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const shoppingCart = await ShoppingCart.findByPk(id);
            if (shoppingCart) {
                res.status(200).json(shoppingCart);
            } else {
                res.status(404).json({ message: 'ShoppingCart not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async createShoppingCart(req: Request, res: Response): Promise<void> {
        try {
            const { userId, products } = req.body;
            const shoppingCart = await ShoppingCart.create({ userId });

            if (products && products.length > 0) {
                for (const product of products) {
                    await ShoppingCartProduct.create({
                        shoppingCartId: shoppingCart.id,
                        productId: product.productId,
                        quantity: product.quantity
                    });
                }
            }
            res.status(201).json(shoppingCart);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async updateShoppingCart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { user_id } = req.body;
            const shoppingCart = await ShoppingCart.findByPk(id);
            if (shoppingCart) {
                shoppingCart.user_id = user_id;
                await shoppingCart.save();
                res.status(200).json(shoppingCart);
            } else {
                res.status(404).json({ message: 'ShoppingCart not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async deleteShoppingCart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const shoppingCart = await ShoppingCart.findByPk(id);
            if (shoppingCart) {
                await shoppingCart.destroy();
                res.status(200).json({ message: 'ShoppingCart deleted successfully' });
            } else {
                res.status(404).json({ message: 'ShoppingCart not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}