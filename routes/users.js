import express from "express";
import userController from "../controller/users.js";

const router = express.Router();
router.post('/add', userController.createUser);

export default router;