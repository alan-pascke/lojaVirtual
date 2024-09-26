import { Router } from "express";
import PaymentController from "../controller/PaymentController";

const paymentRouter = Router();

paymentRouter.post('/process_payment', PaymentController.processPayment);
// paymentRouter.post('/create_preference', PaymentController.createPreference);
paymentRouter.get("/getPayments", PaymentController.getAllPayments);
paymentRouter.get("/getPayment/:id", PaymentController.getPaymentById);
paymentRouter.put("/updatePayment/:id", PaymentController.updatePayment);


export default paymentRouter 