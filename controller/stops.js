import { getAllLocations, searchStop } from "../services/stops.js";

async function getStops(req, res) {
  const { name } = req.body;
  const stops = await searchStop(name);
  res.json({ res: stops });
}

async function getAllStops(req, res) {
  const stops = await getAllLocations();
  res.json({ res: stops });
}

export default { getStops, getAllStops };
