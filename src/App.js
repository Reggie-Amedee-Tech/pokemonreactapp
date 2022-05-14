import logo from './logo.svg';
import './App.css';
import PokemonForm from './components/PokemonForm/PokemonForm';
import PokemonList from './components/PokemonList/PokemonList';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';


function App() {
  const [pokemon, setPokemon] = useState('');
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [responseObj, setResponseObj] = useState({});
  const [request, setRequest] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => {
        if (response.ok) {
          return response.json()

        } 
        throw new Error('Request Failed')
      }, networkError => {
        console.log(networkError.message)
      })
      .then(jsonResponse => {
        return setResponseObj(jsonResponse)
      })
      .catch(function(error) {
        
        console.log(error)
      })
  }, [pokemon])

  function onSubmitHandler(e) {
    e.preventDefault()
    if (responseObj.count === 1126) {
      setPokemon('')
      setRequest(false)
      console.log('ERROR')
      
    }
    else {
      setCurrentPokemon([responseObj])
      setPokemon('')
      setRequest(true)
    }

    

  }

  function onChangeHandler(e) {
    setPokemon(e.target.value.toLowerCase())
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
      <section>
        <PokemonForm pokemon={pokemon} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </section>
      <section>
        <PokemonList currentPokemon={currentPokemon} request={request}/>
      </section>
      </main>
      <footer>
        Page created by Reginald Jean Amedee
      </footer>
    </div>
  );
}

export default App;
