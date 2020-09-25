export default class FavouriteMovies {
    constructor() {
        this.favouriteList = []
    }

    addMovie(movietoAdd) {
      const favMovie = movietoAdd
        this.favouriteList.push(favMovie)
        return favMovie
    }

    deleteMovie(id) {
        const index = this.favouriteList.findIndex(fav => fav.imdbID === id)  //return 1 if movie is liked
        this.favouriteList.splice(index, 1)
    }

    isFavourite (id) {
        return this.favouriteList.findIndex(fav => fav.imdbID === id) !== -1;
    }

    getFav() {
        return this.favouriteList.length;
    }
}