// Importamos la BD temporal de películas. 
const dataBaseMovies = require('../../../backend/dataBaseMovies');

let id = 4;

module.exports = {
    getAllMovies: () => {
        return dataBaseMovies;
    },
    createMovie: (title, imageUrl, director, year, genre, duration, rate) => {
        const newMovie = {
            id,
            title,
            imageUrl,
            director,
            year,
            genre,
            duration,
            rate
        };
        id++;
        dataBaseMovies.push(newMovie);
    }
}