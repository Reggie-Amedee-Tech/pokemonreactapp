import React, { useState, useEffect } from "react";

const PokemonForm = (props) => {
    const { onSubmitHandler, onChangeHandler, pokemon } = props;

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