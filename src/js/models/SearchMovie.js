import axios from 'axios'

export default class SearchMovie {
    constructor(query) {
        this.query = query

    }

    async getMovies() {
        const results = await axios(`http://www.omdbapi.com/?apikey=b32e7243&s=${this.query}&page=1`)
        console.log(this.moviesData = results.data.Search)
        this.moviesData = results.data.Search
    }
}