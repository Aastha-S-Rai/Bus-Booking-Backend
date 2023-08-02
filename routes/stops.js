import express from "express";
import stopController from "../controller/stops.js";

const router = express.Router();
router.post('/search', stopController.getStops);

export default router;