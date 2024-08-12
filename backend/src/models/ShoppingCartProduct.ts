// src/models/ShoppingCartProduct.ts
import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { ShoppingCart } from './ShoppingCart';
import { Product } from './Product';

@Table({
    tableName: 'shopping_cart_products',
})
export class ShoppingCartProduct extends Model {
    @ForeignKey(() => ShoppingCart)
    @Column
    shopping_cart_id!: number;

    @ForeignKey(() => Product)
    @Column
    product_id!: number;

    @Column
    quantity!: number;
}
