import { GET_POKEMON_DETAILS, GET_POKEMON_DETAILS_FAILED } from "./detailedPokemonType";
import axios from "axios";


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
        axios.get(detailedPokemonLink)
            .then(response => {
                const currentDetailedPokemon = response.data;
                console.log(currentDetailedPokemon)
                dispatch(detailedPokemonSuccess(currentDetailedPokemon))
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
}

