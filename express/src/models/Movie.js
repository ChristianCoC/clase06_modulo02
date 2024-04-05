const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    poster: String,
    director: String,
    year: Number,
    genre: Array,
    duration: String,
    rate: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;