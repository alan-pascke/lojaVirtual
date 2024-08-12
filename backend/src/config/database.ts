import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Address } from '../models/Address';
import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { Order } from '../models/Order';
import { Payment } from '../models/Payment';
import { ShoppingCart } from '../models/ShoppingCart';
import { OrderProduct } from '../models/OrderProduct';
import { ShoppingCartProduct } from '../models/ShoppingCartProduct';
dotenv.config();


const dbUrl = process.env.DATABASE_URL;


if (!dbUrl) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }
const sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    models: [ User, Address, Category, Product, Order, Payment, ShoppingCart, OrderProduct, ShoppingCartProduct],
    
  });
export const initializeDB = async () => {
    // await Product.sync({ force: true }); 
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
  }).catch((error) => {
      console.error('Unable to connect to the database:', error);
  });
}


export default sequelize
