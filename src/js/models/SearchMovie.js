import axios from 'axios'

export default class SearchMovie {
    constructor(query) {
        this.query = query
    }

    async getMovies() {
       const moviesData = await axios(`http://www.omdbapi.com/?apikey=b32e7243&s=${this.query}`)
        console.log(moviesData)
       
    }
}