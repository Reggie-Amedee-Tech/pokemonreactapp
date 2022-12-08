const SaveFavoritePokemon = require('../model/favoritePokemon');


module.exports.addPokemon = (request, response) => {
    const {pokemonListName, pokemonList} = request.body;
    SaveFavoritePokemon.create({
        pokemonListName,
        pokemonList
    })
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}