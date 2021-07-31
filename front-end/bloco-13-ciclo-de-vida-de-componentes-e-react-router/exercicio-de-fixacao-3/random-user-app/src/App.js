import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      resultApi: [],
    }

    this.fetchRandomUser = this.fetchRandomUser.bind(this)
    this.displayUser = this.displayUser.bind(this)

  }

  async fetchRandomUser() {
    this.setState(
      { loading: true },
      async () => {
        const requestRandomUser = await fetch('https://api.randomuser.me/')
        const requestObject = await requestRandomUser.json();
        // Ainda dentro da callback assincrona, declara-se o novo state do componente
        this.setState({
          loading: false,
          resultApi: requestObject.results, // Colocar o results era o que faltava rsrs
        })
      }
    )
  }

  displayUser() {
    // Existem outras formas de resolver essa questão
    // Considerando que a api retorna sempre um objeto, onde a chave "results" possui como valor um array de objetos
    // fiz a desetruturação pelo item 0 do array contido na chave results. Notar que o setState acima foi feito considerando
    // o dot notation "results"
    const { name: { title, first, last }, location: { street, city }, dob: { age }, email } = this.state.resultApi[0]
    return (
      <div>
        <h1>{`${title} ${first} ${last}`}</h1>
        <h2>{`${street.name} ${city}`}</h2>
        <p>{`${age}`}</p>
        <p>{`${email}`}</p>
      </div>
    );
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <p>Loading...</p>
    return (
      <div className="App">
        {loading ? loadingElement : this.displayUser()}
      </div>
    );
  }


}

export default App;
