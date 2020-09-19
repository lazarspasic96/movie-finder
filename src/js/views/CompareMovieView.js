import * as domElements from '../base'

export const compareMovieView = () => {
      const compareView = `<div class='compare-movie-container'>
    <div class='first-movie-compare'>
        <input class='compare-movie-input' type='text'/>
        <div class = 'first-movie-values'> 
        </div>
    </div>
    <div class='second-movie-compare'>
        <input class='compare-movie-input' type='text' />
        <div class = 'second-movie-values'> 
        </div>
    </div>
</div>`
    domElements.contentDiv.innerHTML = compareView
}


export const compareValues = (movieData) => {
    if (movieData) {
    document.querySelector('.first-movie-values').innerHTML = '<p>alooo</p>'
    }




}