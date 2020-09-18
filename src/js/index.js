import '../css/style.css'
import SearchMovie from './models/SearchMovie'
import * as domElements from './base'
import * as SearchMovieView from './views/SearchMovieView'
import { compareMovieView } from './views/CompareMovieView'
import { SingleMovie } from './models/SingleMovie'
import { singleMovieView } from './views/SingleMovieView'
import { createHashHistory } from 'history';
import CompareMovie from './models/CompareMovie'
import { card } from '../shared/Card'
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
        case 'compare-movies':
            compareMovieView()
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
    const card = event.target.closest('.card-img')
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
    console.log('jel uso ovde')

    try {
        if (id) {
            state.compareSingleMovie = new CompareMovie(id)

            if (sideInput === 'left') {
                //first prepare UI
                //leftmovieview
                await state.compareSingleMovie.getSingleMovieCompare(id)

                console.log('leftttt', state.compareSingleMovie)

                document.querySelector('.first-movie-compare').insertAdjacentHTML= `<div>${state.compareSingleMovie.movieToCompare.Title} </div>`



                //update the view
            }

            else {
                //first prepare UI
                compareMovieView()

                //rightmovieview
                await state.compareSingleMovie.getSingleMovieCompare(id)


                //update the view
            }
        }

    } catch (error) {

    }
}

/* LEFT MOVIE */

domElements.contentDiv.addEventListener('click', event => {

    const cardButton = event.target.closest('.btn-compare')
    if(cardButton) {
        const id = cardButton.dataset.movieid
        controlCompareMovie(id, 'left')
    }
})

domElements.contentDiv.addEventListener('click', event => {

    const cardButton = event.target.closest('.btn-compare')
    if(cardButton) {
        const id = cardButton.dataset.movieid
        history.push({
            pathname: 'compare-movies',
            search: ''
        })
        controlCompareMovie(id, 'left')
    }
})





/* RIGHT MOVIE */



















