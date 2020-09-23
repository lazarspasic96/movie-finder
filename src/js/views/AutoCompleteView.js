


export const clearResults = (side) => document.querySelector(`.dropdown-${side}`).innerHTML = ''
export const toggleClass = (side,active) => {

    if(active) {
        side === 'left' ?
        document.querySelector('.dropdown-left').classList.add('active') :
        document.querySelector('.dropdown-right').classList.add('active')
    }
    else {
        side === 'left' ?
        document.querySelector('.dropdown-left').classList.remove('active') :
        document.querySelector('.dropdown-right').classList.remove('active')
    }

}

const item = (movie) => {
    const item = `
        <div class = 'dropDownItem' data-movieid = ${movie.imdbID}>
            <img src = '${movie.Poster}' />
            <p> ${movie.Title} (${movie.Year}) </p>

       </div>
    `
    return item
}

const renderResults = (data, side) => {
console.log('jel uso ovde uopsteee', data)

    data.forEach(movie => {
    document.querySelector(`.dropdown-${side}`).insertAdjacentHTML('afterbegin', item(movie)) 
    });
}

export const dropDownMenu = (results, side) => {
    renderResults(results, side)
}
