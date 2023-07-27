import connector from "./dbConnection.js";

connector.set("debug", true);
const stops = {
  name: { type: String, required: true },
  key: { type: String, required: true },
};

const Stop = connector.model("Stops", stops);

async function create(name, key) {
  const stop = new Stop({
    name,
    key,
  });
  const busStop = await stop.save();
  return busStop;
}

export default {
    create,
  };