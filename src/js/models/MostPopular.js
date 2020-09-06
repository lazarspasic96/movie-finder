import axios from 'axios'

export default class MostPopular {
    constructor() {

    }

    async getShows() {
       const moviesData = await axios(`http://www.omdbapi.com/?apikey=b32e7243&s=batman`)
        console.log(moviesData)
       
    }
}