import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const PokemonDetailFromList = (props) => {

    const location = useLocation()
    const pokemonName = location.pathname.slice(35)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
    })


  return (
    <div>PokemonDetailFromList</div>
  )
}

export default PokemonDetailFromList