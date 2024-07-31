// src/models/Order.ts
import { Table, Column, Model, ForeignKey, BelongsTo, HasOne, BelongsToMany } from 'sequelize-typescript';
import { User } from './User';
import { Payment } from './Payment';
import { Product } from './Product';
import { OrderProduct } from './OrderProduct';

@Table
export class Order extends Model {
    @ForeignKey(() => User)
    @Column
    user_id!: number;

    @BelongsTo(() => User)
    user!: User;

    @HasOne(() => Payment)
    payment!: Payment;

    @BelongsToMany(() => Product, () => OrderProduct)
    products!: Product[];
}
