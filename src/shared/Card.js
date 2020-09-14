import poster from '../img/Heart.png'
import favouriteHeart from '../img/favouriteHeart.png'
import basicHeart from '../img/Heart.png'

export const card = (movie, favourite = false) => {
    console.log(movie)
    let card = `
        <div class = 'card' data-movieId = ${movie.imdbID}> 
        
            <div class = 'card-info'> 
                <div class = 'card-img'> 
                    <img class = 'movie-poster' src = '${movie.Poster !== 'N/A' ? movie.Poster : poster}' />
                </div>
                <p class = 'movie-info'>${movie.Title}</p>
            
               
                    <button class = 'btn-favourite'>Favourite</button>
                    <button class = 'btn-compare'>Compare</button>
              
               
            </div>
      
        </div>
    `

    return card

}


/*  <img class = 'icon-heart' src = ${favourite ? favouriteHeart : basicHeart} alt='favourite'/>  */