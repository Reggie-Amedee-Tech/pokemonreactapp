const mongoose = require("mongoose");

const SavedPokemonSchema = new mongoose.Schema({
    pokemonListName: {
        type: String
        
    },
    pokemonList: {
        type: Array
    }
}, {timestamps: true})

module.exports = mongoose.model("SavedPokemonSchema", SavedPokemonSchema);