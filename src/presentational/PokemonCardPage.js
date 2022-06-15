import React, { useState, useEffect } from 'react';
import { getPokemon } from '../redux/features/GetPokemonList/getPokemonAction';
import {getDetailedPokemon} from '../redux/features/DetailedPokemon/detailedPokemonAction'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const PokemonCardPage = (props) => {
    const { pokeData, getPokemon} = props;
    const [number, setNumber] = useState(40)

    const incrementer = () => {
        return setNumber(number + 20)
    }
    
    

    console.log(number)

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
                                    <Link to={`${poke.name}`} onClick={() => props.getDetailedPokemonDispatch(poke.url)}>{poke.name}</Link>
                                </div>
                            })}
                            <button onClick={() => {
                                incrementer();
                                getPokemon(number)
                            }}>More...</button>
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
        getPokemon: numberOfPokemon => dispatch(getPokemon(numberOfPokemon)),
        getDetailedPokemonDispatch: detailedPokemonLink => dispatch(getDetailedPokemon(detailedPokemonLink))
    }
}



export default connect(matchStateToProps, matchDispatchToProps)(PokemonCardPage);