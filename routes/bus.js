import express from "express";
import busController from "../controller/bus.js";

const router = express.Router();
router.post("/create", busController.newBus);

export default router;