import * as domElements from '../base'

export const compareMovieView = () => {
    const compareView = `<div class='compare-movie-container'>
    <div class='first-movie-compare'>
        <input class='compare-movie-input autocomplete-left' type='text'/>


        <div class = 'first-movie-values summary'></div>

        <div class = 'autocomplete dropdown-left'></div>
        </div>

        <div class='second-movie-compare summary'>
            <input class='compare-movie-input autocomplete-right' type='text' />
        <div class = 'second-movie-values'></div>
        <div class = 'autocomplete dropdown-right'></div>
    </div>
</div>`
    domElements.contentDiv.innerHTML = compareView
}



const leftMovie = (data) => {
    console.log(data)
    const first = `
    <article class = 'media'> 
        <div class = 'image-media'><img src = ${data.Poster} /></div>
            <div class = 'media-content'> 
                <h1> ${data.Title} </h1>
                <h6> ${data.Genre} </h6>
                <p> ${data.Plot} </p>
        </div>
    </article> 
    <div class ='compared-value'> 
        <p> ${data.Awards}</p>
        <span> Awards</span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.BoxOffice} </p>
        <span> Money Earned </span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.Metascore}</p>
        <span>Metascore</span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.imdbRating} </p>
        <span> IMDB Rating</span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.imdbVotes} </p>
        <span> IMDB Votes</span>
    </div>
    `
    return first
}
const rightMovie = (data) => {
    const second = `
    <article class = 'media'> 
        <div class = 'image-media'><img src = ${data.Poster} /></div>
            <div class = 'media-content'> 
                <h1> ${data.Title} </h1>
                <h6> ${data.Genre} </h6>
                <p> ${data.Plot} </p>
        </div>
    </article> 
    <div class ='compared-value'> 
        <p> ${data.Awards}</p>
        <span> Awards</span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.BoxOffice} </p>
        <span> Money Earned </span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.Metascore}</p>
        <span>Metascore</span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.imdbRating} </p>
        <span> IMDB Rating</span>
    </div>
    <div class ='compared-value'> 
        <p> ${data.imdbVotes} </p>
        <span> IMDB Votes</span>
    </div>
    `
    return second
}

export const compareValues = (movieData, side) => {

    document.querySelector(`.${side}-movie-values`).innerHTML =
        side === 'first' ? leftMovie(movieData) : rightMovie(movieData)

}

