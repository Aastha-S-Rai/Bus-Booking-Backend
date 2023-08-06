import connector from "./dbConnection.js";

connector.set("debug", true);
const stops = {
  name: { type: String, required: true },
};

const Stop = connector.model("Stops", stops);

async function create(name) {
  const stop = new Stop({
    name: name,
  });
  const busStop = await stop.save();
  return busStop;
}

async function readByFilter(filter) {
  const res = Stop.find({ name: { $regex: filter, $options: "i" } });
  return res;
}

async function readAllLocations() {
  const res = Stop.find();
  return res;
}

export default {
  create,
  readByFilter,
  readAllLocations,
};
