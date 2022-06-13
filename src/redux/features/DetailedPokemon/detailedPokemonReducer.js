import { GET_POKEMON_DETAILS, GET_POKEMON_DETAILS_FAILED } from "./detailedPokemonType"


const initialState = {
    loading: false,
    detailedPokemon: true,
    error: ''
}

const detailedPokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON_DETAILS:
        return {
            ...state,
            detailedPokemon: action.payload,
            loading: true
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

