import * as domElements from '../base'
import {card} from '../../shared/Card'


export const getInput = () => domElements.searchInput.value



const renderCard = (movieInfo, isFavouriteRef) => {
console.log(movieInfo, 'nizzzz')
    movieInfo.slice(0, 9).forEach(singleMovie => {
       domElements.contentDiv.insertAdjacentHTML('beforeend', card(singleMovie, isFavouriteRef))
    });

}

export const renderSearchView = (movieInfo, isFavouriteRef ) => {
    domElements.contentDiv.innerHTML = ''
    renderCard(movieInfo, isFavouriteRef)


    

}