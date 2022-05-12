import React, {useState, useEffect} from "react";

const PokemonApi = () => {
    const [responseObj, setResponseObj] = useState({});
    const [pokemon, setPokemon] = useState('');
    const [currentPokemon, setCurrentPokemon] = useState({});

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(response => response.json())
        .then((response) => {
            setResponseObj({response})
        })
        
    })

    function onSubmitHandler (e) {
        e.preventDefault()
        setCurrentPokemon(responseObj)
    }

    return <>
        <h1>Get Pokemon</h1>
        {JSON.stringify(currentPokemon)}
        <button onClick={onSubmitHandler}>Press Me</button>
    
    </>
}

export default PokemonApi