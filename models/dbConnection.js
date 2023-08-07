import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://aastharai2003:Aastha123456@cluster0.oulp2f9.mongodb.net/bookingSystem?retryWrites=true&w=majority');
const connector = mongoose;
export default connector;
