import express from "express";
import busController from "../controller/buses.js";

const router = express.Router();
router.post("/create", busController.newBus);

export default router;