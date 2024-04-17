// Validación de datos para el controlador de películas.
const validateMovies = (req, res, next) => {
  const { title, poster, director, year, genre, duration, rate } = req.body;
  if (!title || !poster || !director || !year || !genre || !duration || !rate) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    });
  } else {
    next();
  }
};

module.exports = validateMovies;
