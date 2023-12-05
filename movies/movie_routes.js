import * as movieDao from "./movieDao.js";

function MovieRoutes(app) {
  const createMovie = async (req, res) => {
    const movie = await movieDao.createMovie(req.body);
    res.json(movie);
  };

  const deleteMovie = async (req, res) => {
    const status = await movieDao.deleteMovie(req.params.movieId);
    res.json(status);
  };

  const findAllMovies = async (req, res) => {
    const movies = await movieDao.findAllMovies();
    res.json(movies);
  };

  const findMovieById = async (req, res) => {
    const movie = await movieDao.findMovieById(req.params.movieId);
    res.json(movie);
  };

  const updateMovie = async (req, res) => {
    const { movieId } = req.params;
    const status = await movieDao.updateMovie(movieId, req.body);
    res.json(status);
  };

  app.post("/api/movies", createMovie);
  app.get("/api/movies", findAllMovies);
  app.get("/api/movies/:movieId", findMovieById);
  app.put("/api/movies/:movieId", updateMovie);
  app.delete("/api/movies/:movieId", deleteMovie);
}

export default MovieRoutes;
