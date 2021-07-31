import React from 'react';

class DadJoke extends React.Component {
  constructor(){
    super();

    this.fetchJoke = this.fetchJoke.bind(this);

    // o estado inicial vai receber o objeto resultado da API
    // Ao executar o construtor pela primeira vez a chave jokeObj vai receber o valor 'undefined'
    // pois a consulta ao API será realizada na fase 'ComponentDidMout()'
    // Outro ponto interessante é a utilizacao de uma chave que receberá o array com as piadas que o user decidir salvar...
    this.state = {
      jokeObj: '',
      loading: true,
      storedJokes:[],
    }
  }

  // Função que realiza o fetch na API
  // Lembrando que um request para API é uma promise (função assincrona)
  // O approach aqui será mediante 'async/await'
  async fetchJoke() {
    // First step é declarar a variável com o objeto que contém os atributo 'headers', paŕÂmetro
    // necessário na API
    const requestHeaders = { headers: { Accept: 'application/json' } };
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const requestObject = await requestReturn.json();

    // A função além de realizar o fetch na api, atualiza o state do componente na chave destinanda ao dataset, json object que retornou da api.
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke()
  }

  render() {
    return (
      <div>
        <span>{this.state.jokeObj.joke}</span>
      </div>
    );
  }
}

export default DadJoke;
