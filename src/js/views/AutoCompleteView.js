


export const clearResults = (side) => document.querySelector(`.dropdown-${side}`).innerHTML = ''
export const toggleClass = (side) => {

    side === 'left' ?
    document.querySelector('.dropdown-left').classList.add('active') :
    document.querySelector('.dropdown-right').classList.add('active')
}



const renderResults = (data, side) => {
console.log('jel uso ovde uopsteee', data)

    data.forEach(movie => {
    document.querySelector(`.dropdown-${side}`).insertAdjacentHTML('afterbegin',`<div><p>${movie.Title}</p></div>`) 
    });
}


export const dropDownMenu = (results, side) => {
    renderResults(results, side)
}
