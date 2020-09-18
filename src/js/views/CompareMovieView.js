import * as domElements from '../base'
export const compareMovieView = () => {
 
    const compareView = `<div class='compare-movie-container'>
        <div class='first-movie-compare col-6 md-6 xl-6 sm-12'>
            <input class='compare-movie-input' type='text'/>
        </div>
        <div class='second-movie-compare'>
            <input class='compare-movie-input' type='text' />
        </div>
    </div>`

    domElements.contentDiv.innerHTML = compareView

}