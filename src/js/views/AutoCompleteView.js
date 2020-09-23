
const toggleDropdown = (side) => {

    document.querySelector(`.dropdown-${side}`).classList.remove('isActive')

}

export const clearResults = (side) => {
    document.querySelector(`.dropdown-${side}`).innerHTML = ''
    toggleDropdown(side)
}

export const toggleClass = (side, query) => {

    if (query) {
        side === 'left' ?
            document.querySelector('.dropdown-left').classList.add('active') :
            document.querySelector('.dropdown-right').classList.add('active')
    }

    else {
        side === 'left' ?
            document.querySelector('.dropdown-left').classList.add('isActive') :
            document.querySelector('.dropdown-right').classList.add('isActive')
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
