import React, { useState } from 'react';
import { selectPokemonApiCall } from '../redux/features/SelectPokemon/selectPokemonAction';
import { connect } from 'react-redux';
import GetPokemon from '../components/GetPokemon';
import classes from '../cssModules/selectPokemonPage.module.css'

function PokemonSearchPage(props) {
    const [pokemonName, setPokemonName] = useState('')
    const { selectedPokeData } = props;

    const handleError = () => {
        if (selectedPokeData === false) {
            return <h2>Pokemon does not exist</h2>
        }
    }

    return (
        <div className={classes.DivPrime}>
            <div className={classes.DivTop}>
                <div className={classes.PokemonSearchBar}>
                    <GetPokemon setPokemonName={setPokemonName} pokemonName={pokemonName} />
                    <button onClick={() => props.selectPokemon(pokemonName)} className={classes.Button}>Find Pokemon</button>
                </div>
            </div>
            {selectedPokeData.loading === null ? <h2 className={classes.Name}>Please input pokemon</h2> :
                <div className={classes.DivBottom}>
                    <img src={selectedPokeData.selectedPokemon.sprites.other['official-artwork'].front_default} alt="pokemon picture" className={classes.Img}></img>
                    <h1 className={classes.Name}>{selectedPokeData.selectedPokemon.name}</h1>

                </div>}

        </div>
    );
}

const matchStateToProps = state => {
    return {
        selectedPokeData: state.selectPokemon
    }
}

const matchDispatchToProps = dispatch => {
    return {
        selectPokemon: selectedPokemon => dispatch(selectPokemonApiCall(selectedPokemon))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(PokemonSearchPage);


