import express from "express"
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js'

const router = express.Router()

// get user controller
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);

//post user controller
router.post("/user", createUser);

//put user controller
router.put("/user/:id", updateUser);

//delete user controller
router.delete("/user/:id", deleteUser);

export default router;