import connector from "./dbConnection.js";

connector.set("debug", true)

const busSchema = {
    number: {type: Number, required: true},
    totalSeats: {type: Number, required: true},
    busRoute: { 
        stopId: [{type: connector.Schema.Types.ObjectId, ref: "stops"}], 
        distance: {type: Number}
    }
};

const Bus = connector.model("buses", busSchema);

const create = async (number, seats, stopId, distance) => {
    const newBus = new Bus({
        number: number,
        totalSeats: seats,
        busRoute: {
            stopId: stopId, 
            distance: distance
        }
    });
    const bus = await newBus.save();
}

export default {create, };