import mongoose from "mongoose";
import movieSchema from "./movieSchema.js";

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;