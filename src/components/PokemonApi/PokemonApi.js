import React, {useState, useEffect} from "react";
import PokemonForm from "../PokemonForm/PokemonForm";
import PokemonList from "../PokemonList/PokemonList";

const PokemonApi = () => {
    const [responseObj, setResponseObj] = useState({});
    const [pokemon, setPokemon] = useState('');
    const [currentPokemon, setCurrentPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then((response) => {
            setResponseObj([response])
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
        
        

        <PokemonForm pokemon={pokemon} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
        <PokemonList currentPokemon={currentPokemon} loading={loading}/>
    
    </>
}

export default PokemonApi