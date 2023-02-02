import express from "express";
import { delete_user, get_user, get_users, insert_user, update_user } from "../controllers/user_controller.js";

const router = express.Router()

router.get('/users', get_users)
router.get('/users/:id', get_user)
router.post('/users', insert_user)
router.put('/users/:id', update_user)
router.delete('/users/:id', delete_user)

export default router