import { MercadoPagoConfig } from 'mercadopago';
import dotenv from 'dotenv';
dotenv.config();


const clientMercadoPago = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
});

export default clientMercadoPago