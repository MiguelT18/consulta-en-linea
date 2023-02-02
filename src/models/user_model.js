import db from "../database/database.js";
import { DataTypes } from "sequelize";

const UserModel = db.define(
    'usuario',
    {
        nombre: {type:DataTypes.STRING},
        apellido: {type:DataTypes.STRING},
        email: {type:DataTypes.STRING},
        contrasenha: {type:DataTypes.STRING},
        rol: {type:DataTypes.STRING}
    }
)
export default UserModel