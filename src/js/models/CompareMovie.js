import axios from 'axios'

export default  class CompareMovie {
    constructor(movieId) {
        this.movieId = movieId
    }

    async getSingleMovieCompare () {
        const results = await axios(`http://www.omdbapi.com/?apikey=b32e7243&i=${this.movieId}`)
        this.movieToCompare = results.data
    }
}