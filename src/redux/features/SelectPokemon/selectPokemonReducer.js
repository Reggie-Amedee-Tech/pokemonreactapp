import { POKEMON_ERROR, POKEMON_NAME, POKEMON_QUERY } from "./selectPokemonType"

const initialState = {
    loading: null,
    selectedPokemon: [],
    pokemonLoaded: false,
    error: ''
}

 const selectPokemonReducer = (state = initialState, action) => {
    switch (action.type) {

        case POKEMON_QUERY: 
        return {
            ...state,
            loading: null
        }

        case POKEMON_NAME: 
        return {
            ...state,
            selectedPokemon: action.payload,
            loading: true,
            pokemonLoaded: true
        }

        case POKEMON_ERROR: 
        return {
            ...state,
            selectedPokemonError: action.payload,
            loading: false,
            pokemonLoaded: false
        }

        default:
            return state
    }
}


export default selectPokemonReducer