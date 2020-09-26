
export const toggleFavourite = (isFavourite, element) => { 


    if(element) {
            isFavourite ? element.classList.add('favourited') : element.classList.remove('favourited')
    }


    
}