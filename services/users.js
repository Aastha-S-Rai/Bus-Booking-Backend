import User from "../models/users.js";

export async function addUser(fname, lname, email, password, dob, phone, user_type) {
    const newUser = await User.create(fname, lname, email, password, dob, phone, user_type);
    if(newUser) {
        console.log("Done");
        return newUser;
    }
    console.log("Problem while adding user");
}
