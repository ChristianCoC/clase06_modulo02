document.addEventListener('DOMContentLoaded', () => {
    const movieForm = document.getElementById('movieForm');
    const movieCardSection = document.querySelector('.movie-card');

    movieForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
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
                <h5 class="card-title">${movie.title}</h5>
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
        movieCardSection.style.display = 'block';
        card.style.display = 'block';
    }
});

