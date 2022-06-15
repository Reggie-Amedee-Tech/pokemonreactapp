import React, { useState, useEffect } from 'react';
import { getPokemon } from '../redux/features/GetPokemonList/getPokemonAction';
import { getDetailedPokemon } from '../redux/features/DetailedPokemon/detailedPokemonAction'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from '../cssModules/PokemonCard.module.css'


const PokemonCardPage = (props) => {
    const { pokeData, getPokemon } = props;
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

            {pokeData.loading ? (
                <h2>Pokemon Loading...</h2>
            ) : pokeData.error ? (
                <h2>{pokeData.error}</h2>
            ) : (
                <div className={classes.TableContainer}>
                    <div className={classes.Container}>
                        <table className={classes.Table}>
                            <tbody>
                                <tr ><h1 className={classes.TableRowTop}>Pokemon Database</h1></tr>
                                {pokeData && pokeData.pokemons && pokeData.pokemons.map((poke, i) => {
                                    return <div key={i} className={classes.LinkDiv}>
                                        <td><Link to={`${poke.name}`} onClick={() => props.getDetailedPokemonDispatch(poke.url)} className={classes.Link}><h2 className={classes.TableRowData}>{poke.name}</h2></Link></td>
                                    </div>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <div className={classes.ButtonDiv}>
            <button onClick={() => {
                incrementer();
                getPokemon(number);
            }}
                className={classes.Button}>More...</button>
                </div>

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