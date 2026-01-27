/* import { OMDB_API_KEY } from "./config.js";

async function fetchMovies() {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=john`)
    const data = await res.json();
    console.log(data);
}

fetchMovies();

object attributes example

{
    Title: 'War of the Worlds',
    Year: '2005', 
    imdbID: 'tt0407304', 
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg'
}

*/
import { OMDB_API_KEY } from "./config.js"

const searchArea = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-bar");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchValue = searchArea.value
    console.log(searchValue)
    renderMovies(searchValue)
})

async function renderMovies(searchValue) {
    const movies = await fetchMovies(searchValue)
    let appendStr = ""
    for (const movie of movies) {
        appendStr += `
            <div class="movie-card">
                <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
                <div class="movie-info">
                    <h2 class="movie-title">${movie.Title}</h2>
                    <div class="movie-meta">
                        <span class="year">${movie.Year}</span>
                    </div>
                    <button class="watchlist-btn">+ Watchlist</button>
                </div>
            </div>
        `
    }
    document.querySelector(".movie-area-initial").innerHTML = appendStr
}
async function fetchMovies(search) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search}`)
    const data = await res.json()
    return(data.Search)
}
