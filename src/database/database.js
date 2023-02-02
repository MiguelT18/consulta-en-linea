import { Sequelize } from "sequelize";

const db = new Sequelize(
    'bdfacturacion',
    'root',
    'Univalle',
    {
        host:'localhost',
        dialect:'mysql'
    }
)
export default db