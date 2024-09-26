import { Request, Response } from "express";
import { Payment } from "mercadopago";
import { Payment as PaymentModel } from "../models/Payment";
import clientMercadoPago from "../config/mercadoPago";


export default class PaymentController {
    
    static async getAllPayments(req: Request, res: Response): Promise<void> {
        try {
            const payments = await PaymentModel.findAll();
            res.json(payments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getPaymentById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const payment = await PaymentModel.findByPk(id);
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
 

    static async processPayment(req: Request, res: Response): Promise<void> {
        const {formData} = req.body;

        console.log(formData);
        try {
            const { token, issuer_id, payment_method_id, transaction_amount, installments, payer } = formData;
            const payment = new Payment(clientMercadoPago)
            const response = await payment.create({
                body: {
                  transaction_amount: Number(transaction_amount),
                  token,
                  description: 'Compra de Teste',
                  installments: Number(installments),
                  payment_method_id,
                  issuer_id,
                  payer,
                },
                // requestOptions: {
                //   idempotencyKey: process.env.IDEMPOTENCYKEY, 
                // },
              });

            console.log(response);
            res.status(200).json({
                status: response.status,
                status_detail: response.status_detail,
                id: response.id,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        } 
    }

    static async updatePayment(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { order_id, amount, payment_date, payment_method } = req.body;
            const payment = await PaymentModel.findByPk(id);
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
            const payment = await PaymentModel.findByPk(id);
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