import axios from 'axios'

export default class SearchMovie {
    constructor(query) {
        this.query = query

    }

    async getMovies() {
        const results = await axios(`https://www.omdbapi.com/?apikey=b32e7243&s=${this.query}&page=1`)
        console.log(this.moviesData = results.data.Search)
        this.moviesData = results.data.Search
    }

    getDataFavourite (id) {
        let movie = null
        for (let i of this.moviesData) {
            
            if(i.imdbID === id) {
                movie = i
            }
        }

        return {
            imdbID: movie.imdbID,
            image: movie.Poster,
            title: movie.Title
        }
    }
}