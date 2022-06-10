import axios from "axios";

const PokemonData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(response => {
        const pokemon = response.data
        console.log(pokemon)
    })
    .catch(error => {
        console.log(error.message)
    })
}