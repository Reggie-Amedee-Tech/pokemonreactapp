import React, {useState} from "react";



const PokemonForm = (props) => {

    const {pokemon, onChangeHandler, onSubmitHandler} = props;

    return <>
    
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

export default PokemonForm