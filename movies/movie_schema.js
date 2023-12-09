import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  releaseDate: Date,
  directors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
  // Add other movie-related properties as needed
});

export default movieSchema;