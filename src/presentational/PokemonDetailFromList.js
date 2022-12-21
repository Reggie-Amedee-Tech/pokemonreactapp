import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import classes from '../cssModules/PokemonDetails.module.css'


const PokemonDetailFromList = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
    const pokemonName = location.pathname.slice(35);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
            .then(res => {
                setPokemonDetails([res.data])
                setLoaded(true)
            })
            .catch(err => console.log(err.message))
    })

    const typeSelector = (type) => {
        if (type === 'electric') {
            return <h2 style={{ backgroundColor: "#F7D02C" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'normal') {
            return <h2 style={{ backgroundColor: "#A8A77A" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'poison') {
            return <h2 style={{ backgroundColor: "#A33EA1" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'flying') {
            return <h2 style={{ backgroundColor: "#A98FF3" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'ground') {
            return <h2 style={{ backgroundColor: "#E2BF65" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'fire') {
            return <h2 style={{ backgroundColor: "#EE8130" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'bug') {
            return <h2 style={{ backgroundColor: "#A6B91A" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'ghost') {
            return <h2 style={{ backgroundColor: "#735797" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'psychic') {
            return <h2 style={{ backgroundColor: "#F95587" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'ice') {
            return <h2 style={{ backgroundColor: "#96D9D6" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'dragon') {
            return <h2 style={{ backgroundColor: "#6F35FC" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'dark') {
            return <h2 style={{ backgroundColor: "#705746" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'fairy') {
            return <h2 style={{ backgroundColor: "#D685AD" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'rock') {
            return <h2 style={{ backgroundColor: "#B6A136" }} className={classes.PokemonType}>{type}</h2>
        } else if (type === 'water') {
            return <h2 style={{ backgroundColor: "#6390F0" }} className={classes.PokemonType}>{type}</h2>
        } else {
            return <h2>{type}</h2>
        }
    }

    return (
        <div>{loaded === true ? <div>
            {pokemonDetails.map(details => {
                return <div className={classes.CardDiv}>
                <div className={classes.CardContainer}>
                    <div className={classes.PokemonNameDiv}>
                        <h2 className={classes.PokemonName}>{details.name}</h2>
                        {typeSelector(details.types[0].type.name)}
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