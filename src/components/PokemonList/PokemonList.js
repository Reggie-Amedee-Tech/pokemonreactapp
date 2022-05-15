import React, { useState } from "react";
import classes from './PokemonList.module.css'


const PokemonList = (props) => {
    const { currentPokemon, request } = props;

    return <>
        {request === false ? <p>Please input a valid pokemon</p> :
            <div>
                {currentPokemon.map(item => {
                    return (
                    
                    <div>
                        <React.Fragment key={item.id}>
                            <div className={classes.TopShell}>
                                <div >
                                    <img src={item.sprites.front_default} alt='picture of pokemon' className={classes.Img}></img>
                                </div>
                                <div className={classes.Bottomshell}>
                                    <h1 className={classes.H1}>Pokemon Name</h1>
                                    <p className={classes.P}>{item.name.toUpperCase()}</p>
                                    <h1 className={classes.H1}>First Appeared in Pokemon</h1>
                                    <p className={classes.P}>{item.game_indices[0].version.name.toUpperCase()}</p>
                                    <div>
                                        <h1 className={classes.H1}>Abilities</h1>
                                            {item.abilities.map((pitem) => {
                                                return <p className={classes.P}>{pitem.ability.name}</p>
                                            })}  
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    </div>
                    )
                })}
            </div>

        }
    </>
}

export default PokemonList;