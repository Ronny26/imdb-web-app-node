import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "movies", required: true },
},
{ collection: "watchlist" });

export default watchlistSchema;