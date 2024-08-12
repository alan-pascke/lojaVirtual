import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';

@Table({
    tableName: 'addresses',
})
export class Address extends Model {
    @Column
    street!: string;

    @Column
    city!: string;

    @Column
    state!: string;

    @Column
    zip_code!: string;

    @ForeignKey(() => User)
    @Column
    user_id!: number;

    @BelongsTo(() => User)
    user!: User;
}
