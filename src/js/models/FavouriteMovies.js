export default class FavouriteMovies {
    constructor() {
        this.favouriteList = []
    }

    addMovie(movietoAdd) {
  
        const favMovie = movietoAdd
        this.favouriteList.push(favMovie)
        this.saveData()
        return favMovie
    }

    deleteMovie(id) {
        console.log('uso sad da izbrise')
        const index = this.favouriteList.findIndex(fav => fav.imdbID === id)  //return 1 if movie is liked
        this.favouriteList.splice(index, 1)
        this.saveData()

    }

    isFavourite(id) {

        if (this.favouriteList) {
            return this.favouriteList.findIndex(fav => fav.imdbID === id) !== -1
        }
    }

    getFav() {
        return this.favouriteList.length;
    }

    saveData() {
        localStorage.setItem('favouriteMovies', JSON.stringify(this.favouriteList))

    }

    readStorage () {
       const storage =  JSON.parse(localStorage.getItem('favouriteMovies'))

       if(storage) {
           this.favouriteList = storage
       }
    }
}