// src/models/Payment.ts
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from './Order';

@Table
export class Payment extends Model {
    @ForeignKey(() => Order)
    @Column
    order_id!: number;

    @Column
    amount!: number;

    @Column
    payment_date!: Date;

    @Column
    payment_method!: string;

    @BelongsTo(() => Order)
    order!: Order;
}
