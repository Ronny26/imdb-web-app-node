import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true}, 
    email: { type: String, required: true},
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "REVIEWER"],
      default: "USER" },
  },
  { collection: "users" });
export default userSchema;
