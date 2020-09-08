import * as domElements from '../base'
import {card} from '../../shared/Card'


const renderCard = (movieInfo) => {
console.log(movieInfo, 'nizzzz')
    movieInfo.forEach(singleMovie => {
       domElements.contentDiv.insertAdjacentHTML('beforeend', card(singleMovie))
    });

}


export const renderSearchView = (movieInfo) => {
    domElements.contentDiv.innerHTML = ''
    renderCard(movieInfo)
    

}