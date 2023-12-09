import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "movies", required: true },
  rating: { type: Number, required: true },
  comment: String,
});

export default ReviewSchema;