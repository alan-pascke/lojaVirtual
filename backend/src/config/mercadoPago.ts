import {MercadoPagoConfig} from 'mercadopago';
import dotenv from 'dotenv';
dotenv.config();

const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
    options: {
        timeout: 5000,
        idempotencyKey:'abc'
    }
});

export default client