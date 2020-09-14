import axios from 'axios'

export class SingleMovie {
    constructor(movieId){
        this.id = movieId
        this.singleMovieData = {}
    }

   async getSingleMovie () {
        const results = axios(`http://www.omdbapi.com/?i=${this.id}&apikey=b32e7243`)
        console.log(results)
   }
}