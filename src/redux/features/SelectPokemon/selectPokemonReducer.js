import { POKEMON_ERROR, POKEMON_NAME } from "./selectPokemonType"

const initialState = {
    loading: true,
    selectedPokemon: [],
    error: ''
}

 const selectPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMON_NAME: 
        return {
            ...state,
            selectedPokemon: action.payload,
            loading: false
        }

        case POKEMON_ERROR: 
        return {
            ...state,
            selectedPokemonError: action.payload,
            loading: false
        }

        default:
            return state
    }
}




export default selectPokemonReducer