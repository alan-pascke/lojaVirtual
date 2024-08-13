import { Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany, IsFloat, DataType } from 'sequelize-typescript';
import { Category } from './Category';
import { Order } from './Order';
import { OrderProduct } from './OrderProduct';
import { ShoppingCart } from './ShoppingCart';
import { ShoppingCartProduct } from './ShoppingCartProduct';

@Table({
    tableName: 'products',
})
export class Product extends Model {
    @Column
    brand!: string;

    @Column
    model!: string;

    @Column
    color!: string;

    @Column
    description!: string;

    @Column(DataType.DECIMAL(10, 2))
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
