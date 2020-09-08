import poster from '../img/Heart.png'

export const card = (movie, favourite = true) => {
    console.log(movie)
    let card = `
        <div class = 'col-md-4 xl-4 sm-12 card'> 
            <div class = 'card-info'> 
                <img src = '${movie.Poster !== 'N/A' ? movie.Poster:  poster}' />
                <p class = 'movie-info'>${movie.Title}</p>
            </div>
            <img src = ${favourite ? './img/heart.png' : '/img/heart.png'} alt='favourite'/>
        </div>
    `

    return card

}