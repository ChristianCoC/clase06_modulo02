// Importamos el servicio de películas.
const moviesService = require('../services/moviesService');

module.exports = {

    // Obtener todas las películas
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: 'Error al obtener las películas'
            });
        }
    },

    // Crear una película
    createMovie: async (req, res) => {
        const { title, imageUrl, director, year, genre, duration, rate } = req.body;
        try {
            await moviesService.createMovie(title, imageUrl, director, year, genre, duration, rate);
            res.status(201).json({
                message: 'Película creada correctamente'
            });
        } catch (error) {
            res.status(500).json({
                error: 'Error al crear la película'
            });
        }
    }
};