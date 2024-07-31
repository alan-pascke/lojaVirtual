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
 
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

app.use('/', userRouter);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})