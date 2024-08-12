import { Request, Response } from "express";
import { Payment } from "../models/Payment";


export default class PaymentController {
    
    static async getAllPayments(req: Request, res: Response): Promise<void> {
        try {
            const payments = await Payment.findAll();
            res.json(payments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getPaymentById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const payment = await Payment.findByPk(id);
            if (payment) {
                res.status(200).json(payment);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async createPayment(req: Request, res: Response): Promise<void> {
        try {
            const { order_id, amount, payment_date, payment_method } = req.body;
            const payment = await Payment.create({ order_id, amount, payment_date, payment_method });
            res.status(201).json(payment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async updatePayment(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { order_id, amount, payment_date, payment_method } = req.body;
            const payment = await Payment.findByPk(id);
            if (payment) {
                payment.order_id = order_id;
                payment.amount = amount;
                payment.payment_date = payment_date;
                payment.payment_method = payment_method;
                await payment.save();
                res.status(200).json(payment);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deletePayment(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const payment = await Payment.findByPk(id);
            if (payment) {
                await payment.destroy();
                res.status(200).json({ message: 'Payment deleted successfully' });
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}