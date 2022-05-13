import logo from './logo.svg';
import './App.css';
import PokemonForm from './components/PokemonForm/PokemonForm';
import PokemonList from './components/PokemonList.js/PokemonList';
import React, {useState, useEffect} from 'react';


function App() {
  const [pokemon, setPokemon] = useState('');
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [responseObj, setResponseObj] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then((response) => {
         setResponseObj(response)
         // you have to store data as an array because that is what you're getting back
         // typically, data is in an array of objects so you have to see what you're getting back

         // look up how to pass child components to a parent component***
         
         console.log(responseObj)
    })
    
    
}, [pokemon]) 

function onSubmitHandler (e) {
  e.preventDefault()
  setCurrentPokemon([responseObj])
  
}

function onChangeHandler(e) {
  setPokemon(e.target.value)
}

  return (
    <div className="App">
      
      <PokemonForm pokemon={pokemon} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
      <PokemonList currentPokemon={currentPokemon}/>
      
    </div>
  );
}

export default App;
