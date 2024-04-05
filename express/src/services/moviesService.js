// Importamos la BD temporal de películas.
const Movie = require('../models/Movie'); 


module.exports = {
    getAllMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },
    createMovie: async (title, poster, director, year, genre, duration, rate) => {},
};