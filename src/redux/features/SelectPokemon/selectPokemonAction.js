import axios from "axios"
import { POKEMON_ERROR, POKEMON_NAME, POKEMON_QUERY } from "./selectPokemonType"

export const selectPokemonQuery = () => {
    return {
        type: POKEMON_QUERY
    }
}

export const selectPokemon = selectedPokemon => {
    return {
        type: POKEMON_NAME,
        payload: selectedPokemon
    }
}

const selectPokemonError = selectedPokemonError => {
    return {
        type: POKEMON_ERROR,
        payload: selectedPokemonError
    }
}

export const selectPokemonApiCall = (selectedPokemon = 'v') => {

    return (dispatch) => {
        dispatch(selectPokemon)
        axios.get('https://pokeapi.co/api/v2/pokemon/' + selectedPokemon)
            .then(response => {
                const currentlySelectedPokemon = response.data
                if (currentlySelectedPokemon.count === 1126) {
                    return
                }
                dispatch(selectPokemon(currentlySelectedPokemon))
                console.log(currentlySelectedPokemon)
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(selectPokemonError(errorMsg))
            })



    }

}



