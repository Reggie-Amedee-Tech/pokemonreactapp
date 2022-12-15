import { GET_POKEMON_DETAILS, GET_POKEMON_DETAILS_FAILED, GET_POKEMON_DETAILS_REQUEST } from "./detailedPokemonType"

const initialState = {
    loading: true,
    detailedPokemon: [],
    error: ''
}

const detailedPokemonReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_POKEMON_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_POKEMON_DETAILS:
        return {
            ...state,
            detailedPokemon: action.payload,
            loading: false
        }

        case GET_POKEMON_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default detailedPokemonReducer

