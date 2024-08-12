// src/models/ShoppingCart.ts
import { Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { User } from './User';
import { Product } from './Product';
import { ShoppingCartProduct } from './ShoppingCartProduct';

@Table({
    tableName: 'shopping_carts',
})
export class ShoppingCart extends Model {
    @ForeignKey(() => User)
    @Column
    user_id!: number;

    @BelongsTo(() => User)
    user!: User;

    @BelongsToMany(() => Product, () => ShoppingCartProduct)
    products!: Product[];
}
