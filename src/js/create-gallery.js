import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

//Import Gallery 
import { API_KEY, BASE_URL } from './constants/moviedb';

async function fetchMovies() {
    try {
        const response = await axios.get(apiUrl);
        displayMovies(response.data.results);
        Notiflix.Notify.success('Movies loaded successfully!');
    } catch (error) {
        console.error('Error fetching movies:', error);
        Notiflix.Notify.failure('Failed to load movies.');
    }
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movies');
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <a href="https://image.tmdb.org/t/p/w500${movie.poster_path}" data-lightbox="gallery">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
        `;
        movieContainer.appendChild(movieElement);
    });

    const lightbox = new SimpleLightbox('.movie-gallery a', {
        /* options */
    });
}

fetchMovies();
