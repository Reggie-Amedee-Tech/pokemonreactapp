const mongoose = require("mongoose");

const SavedPokemonSchema = new mongoose.Schema({
    pokemonListName: {
        type: String,
        required: true
    },
    pokemonList: {
        type: Array,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("SavedPokemonSchema", SavedPokemonSchema);