import { Request, Response } from 'express';
import { Order } from '../models/Order';
import { OrderProduct } from '../models/OrderProduct';


export class OrderController { 

    async getAllOrders(req: Request, res: Response): Promise<void> {
        try {
            const orders = await Order.findAll({
                include: [OrderProduct]});
            res.json(orders);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching orders' });
        }
    }

    async getOrderById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const order = await Order.findOne({ where: { id } });
            res.json(order);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching the order' });
        }
    }

    async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const { userId, products } = req.body;
            const order = await Order.create({ userId });

            if (products && products.length > 0) {
                for (const product of products) {
                    await OrderProduct.create({
                        orderId: order.id,
                        productId: product.productId,
                        quantity: product.quantity
                    });
                }
            }
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the order' });
        }
    }

    async updateOrder(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { user_id } = req.body;
            const order = await Order.update({ user_id }, { where: { id } });
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the order' });
        }
    }

    async deleteOrder(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const order = await Order.destroy({ where: { id } });
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the order' });
        }
    }
}