import React, {useState} from "react";


const PokemonList = (props) => {
    const {currentPokemon, loading} = props;





    return <>
    <div>
        {currentPokemon.map(item => {
            return <div>
                <p>{item.name}</p>
            </div>
        })}
    </div>

    
    </>
}

export default PokemonList;