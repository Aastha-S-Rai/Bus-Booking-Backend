import connector from "./dbConnection.js";

connector.set("debug", true)

const userSchema = {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required: true},
    dob: {type: Date, required: true},
    phone: {type: Number, required: true},
    user_type: {type: String, enum: ['user', 'admin']},
    booking: [{type: connector.Schema.Types.ObjectId, ref: "Booking"}],
}

const User = connector.model("users", userSchema);

async function create(fname, lname, email, pwd, dob, phone, user_type) {
    const newUser = new User({
        first_name: fname,
        last_name: lname,
        email: email,
        password: pwd,
        dob: dob,
        phone: phone,
        user_type: user_type,
    })
    const user = await newUser.save();
    return user;
}

async function read(filter, limit = 1) {
    const userData = await User.find(filter).limit(limit);
    return userData;
}

async function update(filter, newData) {
    const userData = await User.findOneAndUpdate(filter, newData, { new: true });
    return userData;
}

async function remove(filter){
    const res = await User.findOneAndDelete(filter);
    return res;
}

export default{
    create, read, update, remove,
}