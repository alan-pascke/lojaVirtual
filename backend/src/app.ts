import express, { Request, Response }  from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes';
import { initializeDB } from './config/database';
import categoryRouter from './routes/categories.routes';
import productRouter from './routes/product.routes';
import paymentRouter from './routes/payment.routes';
import authRouter from './routes/auth.routes';

const app = express();
const port = 5000; 

const corsOptions = {
    origin: ['https://themusicstore.vercel.app', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions)); 
app.use((req: Request, res: Response, next) => {
    next()
}) 
app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});  

initializeDB()
 
app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', productRouter);
app.use('/', paymentRouter);
app.use('/', authRouter)

 
app.listen(port, () => {
    console.log(`Server running on port {port}`);
})