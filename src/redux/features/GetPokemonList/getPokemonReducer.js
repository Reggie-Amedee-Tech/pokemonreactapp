import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from "./getPokemonType";


const initialState = {
    loading: false,
    pokemons: [],
    error: ''
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_REQUEST: 
        return {
            ...state,
            loading: true
        }

        case GET_POKEMON_SUCCESS: 
        return {
            ...state,
            pokemons: action.payload
        }

        case GET_POKEMON_FAILURE: 
        return {
            loading: false,
            pokemons: [],
            error: action.payload

        }
        default:
            return state
    }
}

export default pokemonReducer;