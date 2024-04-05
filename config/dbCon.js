const mongoose = require('mongoose');

const dbCon = async () => {
    try {
        await mongoose.connect("mongodb+srv://christianjaimesm:Jaimillo81@pruebamovies.ptvufaa.mongodb.net/DataBaseMovies");
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD');
    }
};

module.exports = dbCon;
