import '../css/style.css'
import SearchMovie from './models/SearchMovie'
import * as domElements from './base'
import * as SearchMovieView from './views/SearchMovieView'
import { SingleMovie } from './models/SingleMovie'
import { createHashHistory } from 'history';
let history = createHashHistory();


// central state of app
const state = {}

//GET LIST OF MOVIES ON SEARCH
const controlSearch = async (input) => {

    const query = input

    if (query) {
        state.searchMovie = new SearchMovie(query)
        await state.searchMovie.getMovies(query)
        console.log(state.searchMovie)
        SearchMovieView.renderSearchView(state.searchMovie.moviesData)
    }

}

//onSearch
domElements.searchForm.addEventListener('submit', event => {
    event.preventDefault()
    history.push(
        {
            pathname: '/movies',
            search: `?searched=${SearchMovieView.getInput()}`
        }

    )

})


// GET A SINGLE MOVIE ON CLICK
const controlSingleMovie = async (id) => {

    if (id) {
        state.singleMovie = new SingleMovie(id)
        await state.singleMovie.getSingleMovie()
        console.log('radiiiiiiiiiiii')
    }
}


domElements.contentDiv.addEventListener('click', e => {
    const card = event.target.closest('.card')
    if(card) {
        let singleMovieId = card.dataset.movieid
        history.push({
            pathname: '/single-movie',
            search: `?movieId=${singleMovieId}`

        })
    }
})








/* ROUTING */


history.listen(({ location, action }) => {
    switch (location.pathname) {
        case '/':
            window.location.reload()
            break;
        case '/movies':
            const query = new URLSearchParams(location.search).get('searched')
            controlSearch(query)
            break;
        case '/about':
            console.log('about')
            break;
        case '/compare-movies':
            console.log('compare')
            break;
        case '/favourite':
            console.log('about')
            break;
        case '/single-movie':
            const movieId = new URLSearchParams(location.search).get('movieId')
            controlSingleMovie(movieId)
            break;
        default:
            break;
    }

});

window.addEventListener('load', e => {
    if (history.location.pathname === '/movies' && history.location.search) {
        history.push({
            pathname: history.location.pathname,
            search: history.location.search
        })
    }
})











