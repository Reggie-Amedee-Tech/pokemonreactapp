import React, { useState, useEffect } from 'react';
import { getPokemon } from '../redux/features/GetPokemonList/getPokemonAction';
import { connect } from 'react-redux';
import GetPokemon from '../components/GetPokemon';

const PokemonCardPage = ({ pokeData, getPokemon }) => {
    const [pokemonName, setPokemonName] = useState('')

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <div>
             <>
                {pokeData.loading ? (
                    <h2>Pokemon Loading...</h2>
                ) : pokeData.error ? (
                    <h2>{pokeData.error}</h2>
                ) : (
                    <div>
                        <div>
                            <h2>Your Pokemon</h2>
                        </div>
                        <div>
                            {pokeData && pokeData.pokemons && pokeData.pokemons.map((poke, i) => {
                                return <div key={i}>
                                    <p>{poke.name}</p>
                                </div>
                            })}
                        </div>
                    </div>
                )}
            </>
        </div>
    );
};

const matchStateToProps = state => {
    return {
        pokeData: state.getPokemon
    }
}

const matchDispatchToProps = dispatch => {
    return {
        getPokemon: () => dispatch(getPokemon())
    }
}



export default connect(matchStateToProps, matchDispatchToProps)(PokemonCardPage);