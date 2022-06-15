import { GET_POKEMON_DETAILS, GET_POKEMON_DETAILS_FAILED, GET_POKEMON_DETAILS_REQUEST } from "./detailedPokemonType";
import axios from "axios";

export const detailedPokemonRequest = () => {
    return {
        type: GET_POKEMON_DETAILS_REQUEST
    }
}


export const detailedPokemonSuccess = (pokemonDetail) => {
    return {
        type: GET_POKEMON_DETAILS,
        payload: pokemonDetail
    }
}

const detailedPokemonFailure = (error) => {
    return {
        type: GET_POKEMON_DETAILS_FAILED,
        payload: error
    }
}




export const getDetailedPokemon = (detailedPokemonLink) => {

    return (dispatch) => {
        dispatch(detailedPokemonRequest)
        axios.get(detailedPokemonLink)
            .then(response => {
                const currentDetailedPokemon = response.data;
                console.log(currentDetailedPokemon)
                dispatch(detailedPokemonSuccess(currentDetailedPokemon))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(detailedPokemonFailure(errorMsg))
                
            })
            console.log(detailedPokemonLink)
    }
    
}

