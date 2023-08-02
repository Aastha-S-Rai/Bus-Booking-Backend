import { searchStop } from "../services/stops.js";

async function getStops(req, res) {
  const { name } = req.body;
  const stops = await searchStop(name);
  res.json({ res: stops });
}

export default { getStops };
