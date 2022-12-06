import React, { useState} from 'react';
import { selectPokemonApiCall } from '../redux/features/SelectPokemon/selectPokemonAction';
import { connect } from 'react-redux';
import GetPokemon from '../components/GetPokemon';
import classes from '../cssModules/selectPokemonPage.module.css'

function PokemonSearchPage(props) {
    const [pokemonName, setPokemonName] = useState('');
    const { selectedPokeData } = props;

    const typeSelector = (type) => {
        if (type === 'electric') {
            return <h2 style={{backgroundColor: "#F7D02C"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'normal') {
            return <h2 style={{backgroundColor: "#A8A77A"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'poison') {
            return <h2 style={{backgroundColor: "#A33EA1"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'flying') {
            return <h2 style={{backgroundColor: "#A98FF3"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'ground') {
            return <h2 style={{backgroundColor: "#E2BF65"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'fire') {
            return <h2 style={{backgroundColor: "#EE8130"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'bug') {
            return <h2 style={{backgroundColor: "#A6B91A"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'ghost') {
            return <h2 style={{backgroundColor: "#735797"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'psychic') {
            return <h2 style={{backgroundColor: "#F95587"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'ice') {
            return <h2 style={{backgroundColor: "#96D9D6"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'dragon') {
            return <h2 style={{backgroundColor: "#6F35FC"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'dark') {
            return <h2 style={{backgroundColor: "#705746"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'fairy') {
            return <h2 style={{backgroundColor: "#D685AD"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else if (type === 'rock') {
            return <h2 style={{backgroundColor: "#B6A136"}} className={classes.PokemonType}>{selectedPokeData.selectedPokemon.types[0].type.name}</h2>
        } else {
            return <h1>{selectedPokeData.selectedPokemon.types[0].type.name}</h1>
        }
    }

    return (
        <div className={classes.DivPrime}>
            <div className={classes.Container}>
            <div className={classes.DivTop}>
                <div className={classes.PokemonSearchBar}>
                    <GetPokemon setPokemonName={setPokemonName} pokemonName={pokemonName} />
                    <button onClick={() => props.selectPokemon(pokemonName)} className={classes.Button}>Search</button>
                </div>
            </div>
            <div className={classes.PokemonSearchCard}>
                {selectedPokeData.loading === null ? <h2 className={classes.Name}>Please input pokemon</h2> :
                    selectedPokeData.loading === false ? <h2 className={classes.Name}>Pokemon does not exist</h2> : selectedPokeData.pokemonLoaded === true ? <div className={classes.PokemonCard}>
                        <div className={classes.PictureFrame}>
                            <img src={selectedPokeData.selectedPokemon.sprites.other['official-artwork'].front_default} alt="pokemon picture" className={classes.Img}></img>
                        </div>
                        <p>#{selectedPokeData.selectedPokemon.order}</p>
                        <div className={classes.BottomCard}>
                            <h2>{selectedPokeData.selectedPokemon.name}</h2>
                            {typeSelector(selectedPokeData.selectedPokemon.types[0].type.name)}
                        </div>
                    </div> : <h2>Loading...</h2>}
            </div>
            </div>
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
