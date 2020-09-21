import '../css/style.css'
import SearchMovie from './models/SearchMovie'
import * as domElements from './base'
import * as SearchMovieView from './views/SearchMovieView'
import { compareMovieView, compareValues } from './views/CompareMovieView'
import { SingleMovie } from './models/SingleMovie'
import { singleMovieView } from './views/SingleMovieView'
import { createHashHistory } from 'history';
import CompareMovie from './models/CompareMovie'
import AutoComplete from './models/AutoComplete'
let history = createHashHistory();

/* ROUTING */

history.listen(({ location, action }) => {
    console.log(location)
    switch (location.pathname) {
        case '/':
            window.location.reload()
            break;
        case '/movies':
            const query = new URLSearchParams(location.search).get('searched')
            controlSearch(query)
            break;
        case 'about':
            console.log('about')
            break;
        case '/compare-movies':
            const first = new URLSearchParams(location.search).get('first')
            const second = new URLSearchParams(location.search).get('second')

            if (first) {
                controlCompareMovie(first, 'first')
            }

            else if (second) {
                controlCompareMovie(second, 'second')
            }

            else {
                controlCompareMovie()
            }
            break;
        case 'favourite':
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
    switch (history.location.pathname) {
        case '/movies':
            if (history.location.search) {
                history.push({
                    pathname: history.location.pathname,
                    search: history.location.search
                })
            }
            break;

        case '/single-movie':
            if (history.location.search) {
                history.push({
                    pathname: history.location.pathname,
                    search: history.location.search
                })
            }

        case '/compare-movies':



        default:
            break;
    }

})


// central state of app
const state = {}

//GET LIST OF MOVIES ON SEARCH
const controlSearch = async (input) => {

    const query = input

    if (query) {
        state.searchMovie = new SearchMovie(query)
        await state.searchMovie.getMovies(query)
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

    try {
        if (id) {
            state.singleMovie = new SingleMovie(id)
            await state.singleMovie.getSingleMovie()
            singleMovieView(state.singleMovie.singleMovieData)
        }

    } catch (error) {

    }
}

domElements.contentDiv.addEventListener('click', e => {
    const card = e.target.closest('.card-img')
    if (card) {
        let singleMovieId = card.dataset.movieid
        history.push({
            pathname: '/single-movie',
            search: `?movieId=${singleMovieId}`

        })
    }
})
//COMPARE MOVIE
const controlCompareMovie = async (id, sideInput) => {
    if (id) {
        state.compareSingleMovie = new CompareMovie(id)
        if (sideInput === 'first') {

            await state.compareSingleMovie.getSingleMovieCompare(id)

            if (document.querySelector('.compare-movie-container')) {
                compareValues(state.compareSingleMovie.movieToCompare, 'first')
            }

            else {
                compareMovieView()
                compareValues(state.compareSingleMovie.movieToCompare, 'first')
            }
        }

        else {
            //first prepare UI
            //rightmovieview
            console.log('it works')
            await state.compareSingleMovie.getSingleMovieCompare(id)
            //update the view
        }
    }

    else {
        compareMovieView()
    }

}

/* LEFT MOVIE */

/* domElements.contentDiv.addEventListener('click', event => {

    const cardButton = event.target.closest('.btn-compare')
    if (cardButton) {
        const id = cardButton.dataset.movieid
        controlCompareMovie(id, 'left')
    }
}) */

domElements.contentDiv.addEventListener('click', event => {

    const cardButton = event.target.closest('.btn-compare')
    if (cardButton) {
        const id = cardButton.dataset.movieid
        history.push({
            pathname: '/compare-movies',
            search: `?first=${id}`
        })
    }
})

/* AUTOCOMPLETE */


const controlAutoComplete = async (query) => {


    if(!state.autoComplete ) {
        state.autoComplete = new AutoComplete(query)
    }

    await state.autoComplete.getAutoCompleteData(query)

}



let id;
domElements.contentDiv.addEventListener('keyup', e => {
    const input = e.target.closest('.compare-movie-input ')

    if (id) {
        clearTimeout(id)
    }


    id = setTimeout(() => {
        controlAutoComplete(e.target.value)
    }, 1000);

})

