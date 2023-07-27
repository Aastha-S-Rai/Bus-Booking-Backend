import Stop from "../models/stops.js"

export async function createStop(name, key) {
    const newStop = await Stop.create(name, key);
    if (newStop) {
        console.log("Done")
        return newStop
    }
    console.log("There's some issue while creating stop")
}