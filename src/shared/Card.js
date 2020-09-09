import poster from '../img/Heart.png'
import favouriteHeart from '../img/favouriteHeart.png'
import basicHeart from '../img/Heart.png'

export const card = (movie, favourite = true) => {
    console.log(movie)
    let card = `
        <div class = 'card'> 
        
            <div class = 'card-info'> 
                <div class = 'card-img'> 
                    <img class = 'movie-poster' src = '${movie.Poster !== 'N/A' ? movie.Poster : poster}' />
                </div>
                <p class = 'movie-info'>${movie.Title}</p>
                <img class = 'icon-heart' src = ${favourite ? favouriteHeart : basicHeart} alt='favourite'/> 
            </div>
      
        </div>
    `

    return card

}


{/* */ }


{/* <img src = ${favourite ? './img/heart.png' : '/img/heart.png'} alt='favourite'/> */ }