import poster from '../img/Heart.png'

export const card = (movie, favourite = true) => {
    console.log(movie)
    let card = `
        <div class = 'card'> 
            <div class = 'card-info'> 
         
                <p class = 'movie-info'>${''}</p>
            </div>
      
        </div>
    `

    return card

}   


{/* <img src = '${movie.Poster !== 'N/A' ? movie.Poster:  poster}' /> */}     


{/* <img src = ${favourite ? './img/heart.png' : '/img/heart.png'} alt='favourite'/> */}