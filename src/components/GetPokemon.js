import React from 'react';


const GetPokemon = (props) => {
    const {pokemonName, setPokemonName} = props;

    
    return (
        <div>
            <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)}/>
        </div>
    );
};

export default GetPokemon;