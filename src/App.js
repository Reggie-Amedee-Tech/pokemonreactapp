import logo from './logo.svg';
import './App.css';
import PokemonForm from './components/PokemonForm/PokemonForm';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonApi from './components/PokemonApi/PokemonApi';


function App() {
  return (
    <div className="App">
      
      <PokemonApi />
      
    </div>
  );
}

export default App;
