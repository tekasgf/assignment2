//Popular Movies
async function fetchPopularMovies() {
    try {
        const response = await fetch('/movies/popular');
        const movies = await response.json();

        const moviesList = document.getElementById('movies-list');
        moviesList.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>Rating: ${movie.vote_average}</p>
                </div>
            `;
            moviesList.innerHTML += movieCard;
        });
    } catch (error) {
        console.error('Error fetching popular movies:', error);
    }
}

//Movie details
document.getElementById('movie-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const movieTitle = document.getElementById('movie-input').value;

    try {
        const response = await fetch(`/movies/details/${movieTitle}`);
        const movie = await response.json();

        const movieInfo = document.getElementById('movie-info');
        movieInfo.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Awards:</strong> ${movie.Awards}</p>
            <p><strong>Runtime:</strong> ${movie.Runtime}</p>
        `;

        document.getElementById('movie-details').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
});

window.addEventListener('load', fetchPopularMovies);

