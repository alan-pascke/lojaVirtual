import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Order } from './Order';
import { Product } from './Product';

@Table
export class OrderProduct extends Model {
    @ForeignKey(() => Order)
    @Column
    order_id!: number;

    @ForeignKey(() => Product)
    @Column
    product_id!: number;

    @Column
    quantity!: number;
}
