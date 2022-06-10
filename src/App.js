import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import PokemonSearchPage from './presentational/PokemonSearchPage';
import PokemonCardPage from './presentational/PokemonCardPage';




function App() {
  
  
  return (
    <Provider store={store}>
      <PokemonSearchPage />
      <PokemonCardPage />
    
      
    
    </Provider>
  );
}

export default App;
