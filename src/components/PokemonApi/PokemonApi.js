import React, {useState, useEffect} from "react";

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
        
    })

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
        

        <form onSubmit={onSubmitHandler}>
            <label>Type in your Pokemon name</label>
            <input
            type="text"
            value={pokemon}
            onChange={onChangeHandler}
            ></input>
            <button type="submit">Press Me</button>
        </form>
    
    </>
}

export default PokemonApi