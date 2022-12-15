import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import PokemonSearchPage from './presentational/PokemonSearchPage';
import PokemonDetails from './presentational/PokemonDetails';
import {Route, Routes} from 'react-router-dom'
import PokemonCardPage from './presentational/PokemonCardPage';
import Header from './presentational/Header';
import HomePage from './presentational/HomePage';
import SavedPokemonPage from './presentational/SavedPokemonPage';
import AllPokemonLists from './presentational/AllPokemonLists';
import ViewPokemonDetails from './components/ViewPokemonDetails';
import PokemonDetailFromList from './presentational/PokemonDetailFromList';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="search" element={<PokemonSearchPage/>}/>
      <Route path="pokemonList" element={<PokemonCardPage />}/>
      <Route path="pokemonList/:id"  element={<PokemonDetails/>}/>
      <Route path="savedPokemonList" element={<SavedPokemonPage/>}/>
      <Route path="allLists" element={<AllPokemonLists/>}/>
      <Route path="allLists/:id" element={<ViewPokemonDetails/>}/>
      <Route path="allLists/:id/search" element={<PokemonSearchPage/>}/>
      <Route path='allLists/:id/:id' element={<PokemonDetailFromList/>}/>
      </Routes>
      <footer>
          Page Created By Reginald Jean Amedee
        </footer>
    </Provider>
  );
}

export default App;
