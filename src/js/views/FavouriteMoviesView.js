
import * as domElements from '../base'
import { favouriteCard} from '../../shared/Card'
export const toggleFavourite = (isFavourite, element) => { 
    if(element) {
            isFavourite ? element.classList.add('favourited') : element.classList.remove('favourited')
    }
    
}

export const favouriteList = (data) => {
if(data) {
    
        domElements.contentDiv.innerHTML = ''
        data.forEach(movie => {
            domElements.contentDiv.insertAdjacentHTML('beforeend', favouriteCard(movie))
        });

}
}