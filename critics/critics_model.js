import mongoose from "mongoose";
import criticSchema from "./critics_schema";
const criticsModel = mongoose.model("critics", adminSchema);
export default criticsModel;