import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SavedPokemonComponent = () => {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListName, setPokemonListName] = useState('');

  const navigate = useNavigate();
  
  const startList = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/pokemon/addPokemon", {
      pokemonList,
      pokemonListName
    })
    .then(res => {
      navigate("/allLists")
      console.log(res)})
    .catch(err => console.log(err.message))
  }

  return (
    <div>
      <form onSubmit={startList}>
        <h1>Create a pokemon list!</h1>
        <label>Pokemon list name</label>
        <input type="text" value={pokemonListName} onChange={(e) => setPokemonListName(e.target.value)}/>
        <button type="submit">Create List</button>
      </form>
    </div>
  )
}

export default SavedPokemonComponent