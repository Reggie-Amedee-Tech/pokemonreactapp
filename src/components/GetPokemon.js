import React from 'react';
import classes from '../cssModules/GetPokemon.module.css'


const GetPokemon = (props) => {
    const {pokemonName, setPokemonName} = props;

    
    return (
        <div>
            <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value.toLowerCase())} className={classes.Input}/>
        </div>
    );
};

export default GetPokemon;