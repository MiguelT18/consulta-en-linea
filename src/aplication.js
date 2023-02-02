import express from "express";
import cors from "cors";
import db from "./database/database.js";
import userRoutes from "./routers/routes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)

try
{
    db.authenticate()
    console.log("Conexion con exito con la base de datos")
} catch (error) 
{
    console.log("Error de conexion: ", error)
}



app.get("/", (req, res) => {
    res.send("Bienvenidos")
})

app.listen(8000, () => {
    console.log("Server is running in port 8000")
})