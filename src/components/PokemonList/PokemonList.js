import React, {useState} from "react";
import classes from './PokemonList.module.css'


const PokemonList = (props) => {
    const { currentPokemon, request } = props;

    return <>
    {request === false ? <p>Please input a valid poken</p> :
    <div>
        {currentPokemon.map(item => {
            return (<div>
                <React.Fragment key={item.id}>
                <div className={classes.TopShell}>
                    <div>
                        <img src={item.sprites.front_default} alt='picture of pokemon' className={classes.Img}></img>
                    </div>
                    <div>

                    <p>Pokemon Name: {item.name}</p>
                    <p>First Appearance: Pokemon - {item.game_indices[0].version.name}</p>

                    <div>

                    <h3 className={classes.H3}>Abilities</h3>
                    <ol className={classes.Ol}>
                        <li>{item.abilities[0].ability.name}</li>
                        <li>{item.abilities[1].ability.name}</li>
                    </ol>
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