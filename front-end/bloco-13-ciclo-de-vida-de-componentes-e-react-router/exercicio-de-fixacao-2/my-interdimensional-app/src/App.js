import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props)  {
    super(props);
    // Estabelecendo um estado iniical
    // uma chave characters que irá receber o objeto json da api
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({ characters: data.results }) // 'results' é uma chave padrão do json que retorna da api
      // verificar se a chave está correta é essencial. Sempre leia a documentação da API que irá consumir para
      // ver como os dados serão retornados. Em outras palavras, como será a estrutura do objeto json
    })
  }

  // Assim que o componente for montado, antes do render, chamar o fetch da api
  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    // com o fetch funcionando corretamente, desestruturar o estado do componente
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Ricky and Morty Characters</h1>
        <div className='body'>
          {characters.map(({ name, image }) => {
            console.log(`${ name } ${ image }`);
            return (
              <div className='container' key={ name }>
                <h3>{ name }</h3>
                <img src={ image } alt={ name }/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
