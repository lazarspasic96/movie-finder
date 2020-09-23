import axios from 'axios'

export class SingleMovie {
    constructor(movieId) {
        this.id = movieId
        this.singleMovieData = {}
    }

    async getSingleMovie() {
        const results = await axios(`http://www.omdbapi.com/?i=${this.id}&apikey=b32e7243`)
        this.singleMovieData = {
            awards: results.data.Awards,
            actors: results.data.Actors,
            image: results.data.Poster,
            title: results.data.Title,
            description: results.data.Plot,
            imdbID: results.data.imdbID
        }
    }
}