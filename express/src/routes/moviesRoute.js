// Definimos las rutas para las películas. (Crear un enrutador)
const { Router } = require('express');
const movieController = require('../controllers/moviesController'); // Ruta del controlador
const validateMovies = require('../middlewares/validateMovies'); // Validación de datos

const movieRouter = Router(); // Instanciamos el enrutador

movieRouter.get('/', movieController.getAllMovies); // Ruta del controlador para obtener todas las películas
movieRouter.post('/', validateMovies, movieController.createMovie); // Ruta del controlador para crear una película con validación de datos

module.exports = movieRouter;