import React, { useState, useEffect } from "react";
import classes from './PokemonForm.module.css'

const PokemonForm = (props) => {
    const { onSubmitHandler, onChangeHandler, pokemon } = props;

    return <>
        
            <form onSubmit={onSubmitHandler}>
            <div className={classes.Form}>
                <label className={classes.Label}>Search Pokémon database</label>
                <input
                    type="text"
                    value={pokemon}
                    onChange={onChangeHandler}
                    className={classes.Input}
                    placeholder="Only input letters!"
                ></input>
                <button type="submit" className={classes.Button}>Search</button>
                </div>
            </form>
        


    </>

}

export default PokemonForm