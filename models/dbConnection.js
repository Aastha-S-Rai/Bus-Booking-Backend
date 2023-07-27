import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect('');
const connector = mongoose;
export default connector;
