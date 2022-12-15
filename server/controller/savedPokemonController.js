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

module.exports.allPokemonList = (request, response) => {
    SaveFavoritePokemon.find({})
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}

module.exports.getListDetails = (request, response) => {
    SaveFavoritePokemon.findOne({_id: request.params.id})
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}

module.exports.addPokemonToList = (request, response) => {
    SaveFavoritePokemon.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}

module.exports.deleteList = (request, response) => {
    SaveFavoritePokemon.deleteOne({_id: request.params.id})
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}