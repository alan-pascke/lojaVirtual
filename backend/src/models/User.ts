import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

enum Role {
    ADMIN = "admin",
    CLIENT = "client"
}


class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM(Role.ADMIN, Role.CLIENT),
            allowNull: false
        }
    },{ 
        sequelize, 
        tableName: "users" 
    }
)

export default User