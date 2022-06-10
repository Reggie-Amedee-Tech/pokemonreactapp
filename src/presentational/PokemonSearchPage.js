import React, {useState} from 'react';
import { selectPokemonApiCall } from '../redux/features/SelectPokemon/selectPokemonAction';
import { connect } from 'react-redux';
import GetPokemon from '../components/GetPokemon';

function PokemonSearchPage(props) {
    const [pokemonName, setPokemonName] = useState('')
    return (
        <div>
            <GetPokemon setPokemonName={setPokemonName} pokemonName={pokemonName}/>
            <button onClick={() => props.selectPokemon(pokemonName)}>Find Pokemon</button>     
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


