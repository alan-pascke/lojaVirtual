import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Product } from './Product';

@Table({
    tableName: 'categories',
})
export class Category extends Model {
    @Column
    name!: string;

    @HasMany(() => Product)
    products!: Product[];
}
