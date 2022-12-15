import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import classes from '../cssModules/PokemonDetails.module.css'


const PokemonDetailFromList = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const location = useLocation()
    const pokemonName = location.pathname.slice(35)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
            .then(res => {
                setPokemonDetails([res.data])
                setLoaded(true)
            })
            .catch(err => console.log(err.message))
    })

    return (
        <div>{loaded === true ? <div>
            {pokemonDetails.map(details => {
                return <div className={classes.CardDiv}>
                <div className={classes.CardContainer}>
                    <div className={classes.PokemonNameDiv}>
                        <h2 className={classes.PokemonName}>{details.name}</h2>
                    </div>
                    <div className={classes.PokemonPictureDiv}>
                        <div className={classes.PokemonPictureContainer}>
                            <img src={details.sprites.other['official-artwork'].front_default} alt="pokemon avatar" className={classes.Img}></img>
                        </div>
                    </div>
                    <div className={classes.BottomDiv}>
                        <div className={classes.BottomContainer}>
                            <div className={classes.AboutContainer}>
                                <h2 className={classes.BottomContainerTitle}>About...</h2>
                            </div>
                            <div className={classes.AboutDetailsContainer}>
                                <div className={classes.AboutLeft}>
                                    <h4 className={classes.BottomContainerTitle}>Game Debute:</h4>
                                    <p className={classes.PTag}>{details.game_indices.map(item => item.version.name)[0]}</p>
                                </div>
                                <div className={classes.AboutRight}>
                                    <h4 className={classes.BottomContainerTitle}>Abilities:</h4>
                                    <p>{details.abilities.map(item => {
                                        return <p className={classes.PTag}>{item.ability.name}</p>
                                    })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => navigate(-1)} className={classes.Button}>Go Back</button>
                
            </div>
            })}
        </div> : <div>
            <h1>Loading...</h1>
        </div>}

        </div>
    )
}

export default PokemonDetailFromList