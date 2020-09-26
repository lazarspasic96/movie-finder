import poster from '../img/Heart.png'
import favouriteHeart from '../img/favouriteHeart.png'
import basicHeart from '../img/Heart.png'

export const card = (movie, isFavourite) => {

 console.log(isFavourite(movie.imdbID))
 console.log(movie.imdbID)

    let card = `
        <div class = 'card'> 
        
            <div class = 'card-info'> 
                <div class = 'card-img' data-movieid = ${movie.imdbID}> 
                    <img class = 'movie-poster' src = '${movie.Poster !== 'N/A' ? movie.Poster : poster}' />
                </div>
                <p class = 'movie-info'>${movie.Title}</p>
            
               
                    <button class = 'btn-favourite ${isFavourite(movie.imdbID) ? 'favourited' : '' }'  data-movieid = ${movie.imdbID}>Favourite</button>
                    <button class = 'btn-compare' data-movieid = ${movie.imdbID}>Compare</button>
              
               
            </div>
      
        </div>
    `

    return card

}


export const favouriteCard = (movie) => {
    
    let card = `
        <div class = 'card'> 
        
            <div class = 'card-info'> 
                <div class = 'card-img' data-movieid = ${movie.imdbID}> 
                    <img class = 'movie-poster' src = '${movie.image !== 'N/A' ? movie.image : poster}' />
                </div>
                <p class = 'movie-info'>${movie.title}</p>
            
               
                    <button id = 'favouriteHandler' class = 'btn-favourite favourited'  data-movieid = ${movie.imdbID}>Favourite</button>
                    <button class = 'btn-compare' data-movieid = ${movie.imdbID}>Compare</button>
            </div>
       </div>
    `
    return card

}



/*  <img class = 'icon-heart' src = ${favourite ? favouriteHeart : basicHeart} alt='favourite'/>  */