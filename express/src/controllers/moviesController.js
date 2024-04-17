import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  const movies = await Movie.find().populate("user");
  res.json(movies);
};

export const getMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
};

export const createMovie = async (req, res) => {
  const { title, poster, director, year, genre, duration, rate } = req.body;

  const newMovie = new Movie({
    title,
    poster,
    director,
    year,
    genre,
    duration,
    rate,
    user: req.user.id
  });
  
  const savedMovie = await newMovie.save();
  res.json(savedMovie);
};

export const deleteMovie = async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  return res.sendStatus(204);
};

export const updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
};

