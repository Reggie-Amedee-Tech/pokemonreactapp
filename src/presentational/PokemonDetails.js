import React from 'react';
import { connect } from 'react-redux';



const PokemonDetails = (props) => {
    const { detailedPokeData } = props;
    return (
        <div>
            {detailedPokeData.detailedPokemon.name}
        </div>
    );
};

const matchStateToProps = state => {
    return {
        detailedPokeData: state.detailedPokemon
    }
}

export default connect(matchStateToProps, null)(PokemonDetails);