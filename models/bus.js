import connector from "./dbConnection.js";
import mongoose from "mongoose";
import StopModel from "./stops.js";

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

    if (!connector.Types.ObjectId.isValid(stopId)) {
        throw new Error("Invalid stopId");
    }

    // Find the corresponding stop document using the provided stopId
    const stopDocument = await StopModel.Stop.findById(stopId);
    if(stopDocument) {
        const newBus = new Bus({
            number: number,
            totalSeats: seats,
            busRoute: {
                stopId: mongoose.Types.ObjectId(stopId), 
                distance: distance
            }
        });
        const bus = await newBus.save();
        return bus
    }
    else {
        console.log("Nope !!!")
    }    
}

export default {create };