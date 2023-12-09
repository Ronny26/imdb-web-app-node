import Movie from "./movieModel.js";

export const createMovie = (movie) => Movie.create(movie);
export const findAllMovies = () => Movie.find();
export const findMovieById = (movieId) => Movie.findById(movieId);
export const updateMovie = (movieId, movie) =>
  Movie.updateOne({ _id: movieId }, { $set: movie });
export const deleteMovie = (movieId) => Movie.deleteOne({ _id: movieId });