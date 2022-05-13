import React, {useState, useEffect} from "react";
import PokemonForm from "../PokemonForm/PokemonForm";

const PokemonApi = () => {
    const [responseObj, setResponseObj] = useState({});
    const [pokemon, setPokemon] = useState('');
    const [currentPokemon, setCurrentPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then((response) => {
            setResponseObj({response})
        })
        
    }, [pokemon])

    function onSubmitHandler (e) {
        e.preventDefault()
        setCurrentPokemon(responseObj)
    }

    function onChangeHandler(e) {
        setPokemon(e.target.value)
    }

    return <>
        <h1>Get Pokemon</h1>
        {JSON.stringify(currentPokemon)}
        

        <PokemonForm pokemon={pokemon} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
    
    </>
}

export default PokemonApi