const axios = require('axios');

// Promesas
const promise = axios.get('https://jsonplaceholder.typicode.com/users');

promise
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

// Async/Await
const fetchMovies = async () => {
    try {
        const response = await axios.get('http://localhost:3000/movies');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};
fetchMovies();

axios.post('http://localhost:3000/movies', {
    title: 'The Godfather',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    director: 'Francis Ford Coppola',
    year: '1972',
    genre: 'Drama',
    duration: '175',
    rate: '9'
});

// Modificar datos (PUT)


// Eliminar datos (DELETE)







