import Bus from "../models/buses.js";

export async function createBus(number, seats, stopId, distance) {
  const newBus = await Bus.create(number, seats, stopId, distance);
  if (newBus) {
    console.log("Done");
    return newBus;
  }
  console.log("There's some issue while creating Bus");
}