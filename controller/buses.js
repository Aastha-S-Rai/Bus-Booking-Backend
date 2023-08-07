import { createBus } from "../services/buses";

const newBus = async (req, res) => {
    const {number, seats, stopId, distance} = req.body;
    try {
        const response = await createBus(number, seats, stopId, distance);
        if(response?._id) {
            console.log(response._id)
            res.setStatus(200).json({response: "create successfully"})
        }
        else {
            res.setStatus(400).json({error: "Not created"})
        }
    }
    catch(error) {
        res.setStatus(400).json({error: "Not created"})
    }
}

export default {newBus, }