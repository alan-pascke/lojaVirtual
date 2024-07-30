import express, { Request, Response }  from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes';
import sequelize from './config/database';


const app = express();
const port = 3000;

app.use(cors());
app.use((req: Request, res: Response, next) => {
    next()
})
app.use(express.json()); 

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
}); 
 

sequelize.sync({force: true});
console.log('Database synced');

app.use('/', userRouter);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})