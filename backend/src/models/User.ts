import { Table, Column, Model, HasMany, HasOne } from 'sequelize-typescript';
import { Address } from './Address';
import { Order } from './Order';
import { ShoppingCart }  from './ShoppingCart';
import { DataTypes } from 'sequelize';

@Table({
    tableName: 'users',
}) 
export class User extends Model {
    @Column({type: DataTypes.STRING})
    name!: string;

    @Column({type: DataTypes.STRING, unique: true, validate:{isEmail: true}})
    email!: string;

    @Column({type: DataTypes.STRING})
    password!: string;

    @HasMany(() => Address)
    addresses!: Address[];

    @HasMany(() => Order)
    orders!: Order[];

    @HasOne(() => ShoppingCart)
    shoppingCart!: ShoppingCart;
}
