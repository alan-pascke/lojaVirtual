import { Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Category } from './Category';
import { Order } from './Order';
import { OrderProduct } from './OrderProduct';
import { ShoppingCart } from './ShoppingCart';
import { ShoppingCartProduct } from './ShoppingCartProduct';

@Table
export class Product extends Model {
    @Column
    name!: string;

    @Column
    description!: string;

    @Column
    price!: number;

    @ForeignKey(() => Category)
    @Column
    category_id!: number;

    @BelongsTo(() => Category)
    category!: Category;

    @BelongsToMany(() => Order, () => OrderProduct)
    orders!: Order[];

    @BelongsToMany(() => ShoppingCart, () => ShoppingCartProduct)
    shoppingCarts!: ShoppingCart[];
}
