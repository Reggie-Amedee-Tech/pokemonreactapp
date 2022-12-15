import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from '../cssModules/PokemonDetails.module.css'



const PokemonDetails = (props) => {
    const { detailedPokeData } = props;
    const [pokemonGames, setPokemonGames] = useState([])
    const navigate = useNavigate()

    return (
        <div className={classes.DivPrime}>
            <div className={classes.Container}>
            {detailedPokeData.loading === true ? <h2 className={classes.H2}>...Loading</h2> : detailedPokeData.loading === false ?
                <div className={classes.CardDiv}>
                    <div className={classes.CardContainer}>
                        <div className={classes.PokemonNameDiv}>
                            <h2 className={classes.PokemonName}>{detailedPokeData.detailedPokemon.name}</h2>
                        </div>
                        <div className={classes.PokemonPictureDiv}>
                            <div className={classes.PokemonPictureContainer}>
                                <img src={detailedPokeData.detailedPokemon.sprites.other['official-artwork'].front_default} alt="pokemon avatar" className={classes.Img}></img>
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
                                        <p className={classes.PTag}>{detailedPokeData.detailedPokemon.game_indices.map(item => item.version.name)[0]}</p>
                                    </div>
                                    <div className={classes.AboutRight}>
                                        <h4 className={classes.BottomContainerTitle}>Abilities:</h4>
                                        <p>{detailedPokeData.detailedPokemon.abilities.map(item => {
                                            return <p className={classes.PTag}>{item.ability.name}</p>
                                        })}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate(-1)} className={classes.Button}>Go Back</button>
                    
                </div>
                 :
                <h2>Pokemon does not exist</h2>}
                </div>
        </div>
    );
};

const matchStateToProps = state => {
    return {
        detailedPokeData: state.detailedPokemon
    }
}

const matchDispatchToProps = dispatch => {
    return {
        getDetailedPokeData: () => dispatch()
    }
}


/* 
<img src={detailedPokeData.detailedPokemon.sprites.front_shiny} alt="pokemon avatar"></img>
            <p>{detailedPokeData.detailedPokemon.height}</p>
            <p>{detailedPokeData.detailedPokemon.game_indices.map(item => {
                return <p>{item.version.name}</p>
            })}</p>
            <p>{detailedPokeData.detailedPokemon.abilities.map(item => {
                return <p>{item.ability.name}</p>
            })}</p> */

export default connect(matchStateToProps, matchDispatchToProps)(PokemonDetails);