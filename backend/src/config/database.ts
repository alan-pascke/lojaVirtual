import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const dbUrl = process.env.DATABASE_URL;


if (!dbUrl) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }
const sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
        require: true,
        rejectUnauthorized: false // Você pode ajustar conforme necessário
        }
    }
  });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

export default sequelize
