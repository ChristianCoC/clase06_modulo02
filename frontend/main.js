document.addEventListener('DOMContentLoaded', async () => {
    const movieForm = document.getElementById('movieForm');
    const movieCardSection = document.querySelector('#container-cards');

    movieForm.addEventListener('submit', handleFormSubmit);

    await getAndDisplayMovies();

    async function getAndDisplayMovies() {
        try {
            const movies = await getMovies();
            movies.forEach(displayMovieCard);
        } catch (error) {
            console.error('Error al obtener las películas:', error);
        }
    }

    async function getMovies() {
        const response = await fetch('http://localhost:3000/movies');
        if (!response.ok) {
            throw new Error('No se pudieron obtener las películas');
        }
        return response.json();
    }

    async function handleFormSubmit(event) {
        event.preventDefault();
        const movieData = getFormData(movieForm);
        sendMovieData(movieData)
            .then(displayMovieCard)
            .catch(error => console.error('Error al agregar la película:', error));
    }

    function getFormData(form) {
        const formData = new FormData(form);
        const movieData = {};
        for (const [key, value] of formData.entries()) {
            movieData[key] = value;
        }
        return movieData;
    }

    async function sendMovieData(movieData) {
        const response = await fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });
        if (!response.ok) {
            throw new Error('No se pudo agregar la película');
        }
        return response.json();
    }

    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-body">
                <h3 class="card-title" id="title-card">${movie.title}</h3>
                <img src="${movie.imageUrl}" class="card-img-top" alt="${movie.title}">
                <p class="card-text">Director: ${movie.director}</p>
                <p class="card-text">Año: ${movie.year}</p>
                <p class="card-text">Género: ${movie.genre}</p>
                <p class="card-text">Duración: ${movie.duration} minutos</p>
                <p class="card-text">Calificación: ${movie.rate}</p>
            </div>
        `;
        return card;
    }

    function displayMovieCard(movie) {
        const card = createMovieCard(movie);
        movieCardSection.appendChild(card);
    }
});



