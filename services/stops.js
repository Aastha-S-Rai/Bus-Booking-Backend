import Stop from "../models/stops.js"

export async function createStop(name) {
    const newStop = await Stop.create(name);
    if (newStop) {
        console.log("Done")
        return newStop
    }
    console.log("There's some issue while creating stop")
}

export async function searchStop(filter) {
    const response = await Stop.readByFilter(filter)
    return response;
}
