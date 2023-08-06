import express from "express";
import stopController from "../controller/stops.js";

const router = express.Router();
router.post("/search", stopController.getStops);
router.get("/get-all-bus-stops", stopController.getAllStops);

export default router;
