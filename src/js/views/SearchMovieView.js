import * as domElements from '../base'
import {card} from '../../shared/Card'


export const getInput = () => domElements.searchInput.value



const renderCard = (movieInfo, isFavourite) => {
console.log(movieInfo, 'nizzzz')
    movieInfo.slice(0, 9).forEach(singleMovie => {
       domElements.contentDiv.insertAdjacentHTML('beforeend', card(singleMovie, isFavourite))
    });

}

export const renderSearchView = (movieInfo, isFavourite ) => {
    domElements.contentDiv.innerHTML = ''
    renderCard(movieInfo, isFavourite)
}

