import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import PokemonSearchPage from './presentational/PokemonSearchPage';
import PokemonDetails from './presentational/PokemonDetails';
import {Route, Routes} from 'react-router-dom'
import PokemonCardPage from './presentational/PokemonCardPage';
import Header from './presentational/Header';
import HomePage from './presentational/HomePage';




function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="search" element={<PokemonSearchPage/>}/>
      <Route path="pokemonList" element={<PokemonCardPage />}/>
      <Route path="pokemonList/:id"  element={<PokemonDetails/>}/>
      </Routes>
      <footer>
          Page Created By Reginald Jean Amedee
        </footer>
    </Provider>
  );
}

export default App;
