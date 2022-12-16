import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../cssModules/SavedPokemonComponent.module.css'
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
    <div className={classes.Div}>
      <div className={classes.Container}>
      <form onSubmit={startList}>
        <h1 style={{margin: "0 auto", width: "35%", marginBottom: "20px", color: "black"}}>Create a pokemon list!</h1>
        <div className={classes.SearchInput}>
        <label className={classes.Label}>Create a Pokemon List</label>
        <input type="text" value={pokemonListName} onChange={(e) => setPokemonListName(e.target.value)} className={classes.Input}/>
        <button className={classes.Button} type="submit">Create List</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SavedPokemonComponent