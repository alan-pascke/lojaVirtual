import express, { Request, Response }  from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes';
import { initializeDB } from './config/database';
import categoryRouter from './routes/categories.routes';
import productRouter from './routes/product.routes';
import paymentRouter from './routes/payment.routes';

const app = express();
const port = 5000; 

app.use(cors()); 
app.use((req: Request, res: Response, next) => {
    next()
}) 
app.use(express.json()); 

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});  

initializeDB()
 
app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', productRouter);
app.use('/', paymentRouter);

 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})