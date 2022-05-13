import React, {useState} from "react";


const PokemonList = (props) => {
    const { currentPokemon } = props;

    return <>
    <div>
        {currentPokemon.map(item => {
            return <div key={item.id}>
                <p>{item.name}</p>
                
            </div>
        })}
    </div>

    
    </>
}

export default PokemonList;