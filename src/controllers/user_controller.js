import UserModel from "../models/user_model.js";

export const get_users = async (req, res) => {
    try 
    {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) 
    {
        console.error(error.message)
        res.json({message:error.message})
    }
}

export const get_user = async (req, res) => {
    try 
    {
        const user = await UserModel.findAll(
            {
                where:{
                    id_usuario: req.params.id
                }
            }
        )
        res.json(user)
    } catch (error) 
    {
        console.error(error.message)
        res.json({message:error.message})
    }
}

export const insert_user = async (req, res) => {
    try 
    {
        await UserModel.create(req.body)
        res.json({
            "message":"Usuario registrado con exito"
        })
    } catch (error) 
    {
        console.error(error.message)
        res.json({message:error.message})
    }
}

export const update_user = async (req, res) => {
    try 
    {
        await UserModel.update(req.body, {
            where: {
                id_usuario: req.params.id
            }
        })
        res.json({
            "message":"Registro actualizado con exito"
        })
    } catch (error) 
    {
        console.error(error.message)
        res.json({message:error.message})
    }
}

export const delete_user = async (req, res) => {
    try 
    {
        await UserModel.destroy({
            where: {
                id_usuario: req.params.id
            }
        })
        res.json({
            "message":"Registro eliminado con exito"
        })
    } catch (error) 
    {
        console.error(error.message)
        res.json({message:error.message})
    }
}
