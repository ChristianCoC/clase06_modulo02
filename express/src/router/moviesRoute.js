// Definimos las rutas para las películas. (Crear un enrutador)
import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getMovies, getMovie, createMovie, updateMovie, deleteMovie } from "../controllers/moviesController.js";
//const validateMovies = require("../middlewares/validateMovies"); // Validación de datos


const movieRouter = Router(); // Instanciamos el enrutador

movieRouter.get("/movies", authRequired, getMovies); // Ruta del controlador para obtener todas las películas
movieRouter.get("/movies/:id", authRequired, getMovie); // Ruta del controlador para obtener una película por ID
movieRouter.post("/movies", authRequired, createMovie); // Ruta del controlador para crear una película con validación de datos
movieRouter.put("/movies/:id", authRequired, updateMovie); // Ruta del controlador para actualizar una película
movieRouter.delete("/movies/:id", authRequired, deleteMovie); // Ruta del controlador para eliminar una película

export default movieRouter;
