import axios from "axios";
import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from "./getPokemonType";

export const getPokemonRequest = () => {
    return {
        type: GET_POKEMON_REQUEST
    }
}

export const getPokemonSuccess = pokemons => {
    return {
        type: GET_POKEMON_SUCCESS,
        payload: pokemons
    }
}

export const getPokemonFailure = error => {
    return {
        type: GET_POKEMON_FAILURE,
        payload: error
    }
}

export const getPokemon = (numberOfPokemon = 20) => {
    return async (dispatch) => {
        dispatch(getPokemonRequest)
        const response = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}&offset=0`)
        .then(response => {
            const pokemon = response.data.results
            dispatch(getPokemonSuccess(pokemon))
            console.log(pokemon)
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(getPokemonFailure(errorMsg))
        })
            
        
    }
}
/*

dispatch(getPokemonRequest)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                const pokemon = response.json()
                dispatch(getPokemonSuccess(pokemon))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(getPokemonFailure(errorMsg))
            })
            */