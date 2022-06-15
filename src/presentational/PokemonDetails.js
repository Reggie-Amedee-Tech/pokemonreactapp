import React, { useEffect } from 'react';
import { connect } from 'react-redux';



const PokemonDetails = (props) => {
    const { detailedPokeData } = props;

    useEffect(() => {
        console.log(detailedPokeData)
    }, [])
    

    return (
        <div>
            {detailedPokeData.loading ? <h2>Please reload pokemon information</h2> : detailedPokeData.loading === false ? <div>
            <img src={detailedPokeData.detailedPokemon.sprites.front_shiny} alt="pokemon avatar"></img>
            <p>{detailedPokeData.detailedPokemon.height}</p>
            <p>{detailedPokeData.detailedPokemon.game_indices.map(item => {
                return <p>{item.version.name}</p>
            })}</p>
            <p>{detailedPokeData.detailedPokemon.abilities.map(item => {
                return <p>{item.ability.name}</p>
            })}</p>
            </div> : <h2>Pokemon does not exist</h2> }
            
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