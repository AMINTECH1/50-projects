const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3245de1671032956fcf1f605f13fb9d3&page=1'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280/'

const search = document.getElementById('search')
const form = document.getElementById('form')
const main =document.getElementById('main')
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
   
    showMovies(data.results)
    
}

function showMovies(movies) {
    main.innerHTML= ''

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML=
      ` <img src="${IMAGE_PATH+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${rate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        </div>`
    main.appendChild(movieEl)
    });
}

function rate(vote) {
    if (vote>= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    } {
        
    }
}
form.addEventListener('submit', (sent)=>{
    sent.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=3245de1671032956fcf1f605f13fb9d3`
        getMovies(SEARCH_URL)
        search.value = ''
    }else {
        window.location.reload()
    };
} )