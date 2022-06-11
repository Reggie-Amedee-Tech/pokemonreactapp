import React, {useState} from 'react';
import { selectPokemonApiCall } from '../redux/features/SelectPokemon/selectPokemonAction';
import { connect } from 'react-redux';
import GetPokemon from '../components/GetPokemon';

function PokemonSearchPage(props) {
    const [pokemonName, setPokemonName] = useState('')
    const {selectedPokeData} = props;

    return (
        <div>
            <div>
            <GetPokemon setPokemonName={setPokemonName} pokemonName={pokemonName}/>
            <button onClick={() => props.selectPokemon(pokemonName)}>Find Pokemon</button>     
            </div>


            {selectedPokeData.loading ? <h2>Please input pokemon</h2> :
            
            <div>
               <img src={selectedPokeData.selectedPokemon.sprites.other['official-artwork'].front_default} alt="pokemon picture"></img>
               <p>{selectedPokeData.selectedPokemon.name}</p>
                
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


