const Movie = require('../models/Movie'); 

module.exports = {
    getAllMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },
    createMovie: async (title, poster, director, year, genre, duration, rate) => {
        const movie = new Movie({ title, poster, director, year, genre, duration, rate });
        await movie.save();
        return movie;
    },
};