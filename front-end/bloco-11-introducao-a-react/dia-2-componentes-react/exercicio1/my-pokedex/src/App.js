import './App.css';
import pokemons from './data'
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">Pokedex</header>
      <section className="sec-all-pokemons">
        <Pokedex pokemons={ pokemons }/>
      </section>
    </div>
  );
}

export default App;
