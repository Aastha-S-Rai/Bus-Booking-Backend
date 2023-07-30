import { addUser } from "../services/users.js"

async function createUser(req, res) {
    const {fname, lname, email, password, confirm_password, dob, phone, userType} = req.body;
    try {
        if(password === confirm_password) {
            const newuser = await addUser(fname, lname, email.toLowerCase(), password, dob, parseInt(phone), userType)
            res.json({res: `user with id ${newuser._id} created successful`})
        }
        else {
            res.json({err: `Password does not match`})
        }
        
    }
    catch (error) {
        res.json({err: 'User Creation failed !!'})
    }
}


export default{ createUser }