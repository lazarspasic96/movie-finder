import * as domElements from '../base'

export const compareMovieView = () => {
      const compareView = `<div class='compare-movie-container'>
    <div class='first-movie-compare'>
        <input class='compare-movie-input autocomplete-left' type='text'/>
        <div class = 'first-movie-values'> 
        </div>
    </div>
    <div class='second-movie-compare'>
        <input class='compare-movie-input autocomplete-right' type='text' />
        <div class = 'second-movie-values'> 
        </div>
    </div>
</div>`
    domElements.contentDiv.innerHTML = compareView
}



const leftMovie = (data) => {
    const first = `
    <div class ='compared-value'> 
        <p>${data.imdbRating}</p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.Metascore}</p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.BoxOffice} </p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.imdbVotes}</p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.Awards} </p>
    </div>
    `
    return first
}
const rightMovie = (data) => {
    const second = `
    <div class ='compared-value'> 
        <p>${data.imdbRating}</p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.Metascore}</p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.BoxOffice} </p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.imdbVotes}</p>
    </div>
    <div class ='compared-value'> 
        <p> ${data.Awards} </p>
    </div>
    `
    return second
}

export const compareValues = (movieData, side) => {
    console.log('sideeee', side)
    if (movieData && side === 'first') {
    document.querySelector('.first-movie-values').insertAdjacentHTML('beforebegin', leftMovie(movieData))
    }
    if(movieData && side === 'second') {
        document.querySelector('.second-movie-values').insertAdjacentHTML('beforebegin', rightMovie(movieData))
    }

}