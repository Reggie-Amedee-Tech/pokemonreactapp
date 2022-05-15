import React, { useState, useEffect } from "react";
import classes from './PokemonForm.module.css'

const PokemonForm = (props) => {
    const { onSubmitHandler, onChangeHandler, pokemon } = props;

    return <>
        
            <form onSubmit={onSubmitHandler}>
            <div className={classes.Form}>
                <label className={classes.Label}>Type in your Pokemon name</label>
                <input
                    type="text"
                    value={pokemon}
                    onChange={onChangeHandler}
                    className={classes.Input}
                ></input>
                <button type="submit" className={classes.Button}>Press Me</button>
                </div>
            </form>
        


    </>

}

export default PokemonForm