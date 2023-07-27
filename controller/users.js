import { addUser } from "../services/users.js"

async function createUser(req, res) {
    const {fname, lname, email, password, dob, phone, userType} = req.body;
    try {
        const newuser = await addUser(fname, lname, email, password, dob, parseInt(phone), userType)
        res.json({res: `user with id ${newuser._id} created successful`})
    }
    catch (error) {
        res.json({err: 'User Creation failed !!'})
    }
}


export default{ createUser }