import { createBus } from "../services/bus.js";

const newBus = async (req, res) => {
    const {number, seats, stopId, distance} = req.body;
    try {
        const response = await createBus(parseInt(number), parseInt(seats), stopId, parseInt(distance));
        if(response?._id) {
            console.log(response._id)
            res.json({response: "create successfully"})
        }
        else {
            res.json({error: "Not created"})
        }
    }
    catch(error) {
        console.log(error);
        res.json({error: "Not created"})
    }
}

export default {newBus, }