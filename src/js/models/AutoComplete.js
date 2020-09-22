import axios from 'axios'
export default class AutoComplete {
    constructor() {
        this.autocompleteList = []

    }

    async getAutoCompleteData(query) {
        const autoCompleteData = await axios(`http://www.omdbapi.com/?apikey=b32e7243&s=${query}`)
        this.autocompleteList = autoCompleteData.data.Search
    }
}