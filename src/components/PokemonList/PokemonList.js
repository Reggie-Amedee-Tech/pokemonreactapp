import React, {useState} from "react";


const PokemonList = (props) => {
    const { currentPokemon, request } = props;

    return <>
    {request === false ? <p>Please input a valid poken</p> :
    <div>
        {currentPokemon.map(item => {
            return (<div>
                <React.Fragment key={item.id}>
                <p>{item.name}</p>
                
                
                </React.Fragment>
            </div>
            )
        })}
    </div>

}
    </>
}

export default PokemonList;