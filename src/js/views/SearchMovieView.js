import * as domElements from '../base'
import {card} from '../../shared/Card'


export const getInput = () => domElements.searchInput.value



const renderCard = (movieInfo) => {
console.log(movieInfo, 'nizzzz')
    movieInfo.slice(0, 9).forEach(singleMovie => {
       domElements.contentDiv.insertAdjacentHTML('afterbegin', card(singleMovie))
    });

}


export const renderSearchView = (movieInfo) => {
    domElements.contentDiv.innerHTML = ''
    renderCard(movieInfo)
    

}