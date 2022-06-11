import axios from "axios"
import { POKEMON_ERROR, POKEMON_NAME } from "./selectPokemonType"

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

export const selectPokemonApiCall = (selectedPokemon) => {

    return (dispatch) => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + selectedPokemon)
            .then(response => {
                const currentlySelectedPokemon = response.data
                dispatch(selectPokemon(currentlySelectedPokemon))
                console.log(currentlySelectedPokemon)
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(selectPokemonError(errorMsg))
            })



    }

}



