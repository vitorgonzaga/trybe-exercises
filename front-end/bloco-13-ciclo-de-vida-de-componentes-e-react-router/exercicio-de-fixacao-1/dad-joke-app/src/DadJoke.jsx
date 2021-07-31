import React from 'react';

class DadJoke extends React.Component {
  constructor(){
    super();

    this.fetchJoke = this.fetchJoke.bind(this);
    this.nextJoke = this.nextJoke.bind(this);

    // o estado inicial vai receber o objeto resultado da API
    // Ao executar o construtor pela primeira vez a chave jokeObj vai receber o valor 'undefined'
    // pois a consulta ao API será realizada na fase 'ComponentDidMout()'
    // Outro ponto interessante é a utilizacao de uma chave que receberá o array com as piadas que o user decidir salvar...
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes:[],
    }
  }

  // Função que realiza o fetch na API
  // Lembrando que um request para API é uma promise (função assincrona)
  // O approach aqui será mediante 'async/await'
  async fetchJoke() {
    // ==== Segunda parte do exercicio, incluíndo a dinâmica do loading na renderização, incluindo condição (renderização condicional)
    // Para isso é necessário lembrar que o setState pode receber dois parâmetros, sendo o primeiro uma atualização padrão do estado do componente e a segunda pode ser uma callback que realiza qualquer procedimento que for definido no escopo da função
    // Portanto:
    this.setState(
      { loading: true }, // Primeiro parâmetro:
      async () => { // não esquecer da sintaxe "async para essa callback que está sendo declarada como segundo parâmetro"
        // ==== Essa foi a primeira parte do exercício
        // First step é declarar a variável com o objeto que contém os atributo 'headers', paŕÂmetro
        // necessário na API
        const requestHeaders = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
        const requestObject = await requestReturn.json();

        // A função além de realizar o fetch na api, atualiza o state do componente na chave destinanda ao dataset, json object que retornou da api.
        this.setState({
          loading: false, // quando a promisse do fetch é resolvida muda o estado da chave loading para true e isso será a condição que será utilizado dentro do render.
          jokeObj: requestObject,
        })
      }
    )
  }

  // Essa função vai chamar uma nova função e atualizar cumulativamente o estado do componente
  // especificamente a chave storedJoke que tem como valor um array
  nextJoke() {
    // Se eu quiser utilizar o estado anterior preciso mencionar esse atributo como parâmetro de uma callback dentro do setState
    this.setState((previousState) => ({
      // quanto quero retornar um objeto, as chaves devem ser contidas dentro dos parênteses no escopo da função
      storedJokes: [...previousState.storedJokes, previousState.jokeObj]
    }))
    this.fetchJoke();
  }

  render() {
    const { jokeObj, storedJokes, loading } = this.state
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        {/* No primeiro paragrafo eu quero mostrar todo o conteúdo da chave storedJokes, que é um array, logo, a cada renderização irei iterar sobre esse array onde cada item será uma parágrafo no meu componente */}
        {/* SEMPRE QUE RENDERIZAR ALGO VIA ITERACAO MAP, LEMBRE-SE DE INFORMAR UM ID NA CHAVE KEY */}
        {/* A iteração sobre um array vazio não ocasiona nenhum tipo de erro, simplesmente não vai renderizar nada */}
        <p>{ storedJokes.map(({ id, joke }) => ( <p key={ id }>{joke}</p> )) }</p>
        {/* Essa foi a primeira versão - sem considerar a condição loading */}
        {/* <p>{ jokeObj ? jokeObj.joke : loadingElement }</p> */}
        {/* Considerando a condição loading (foi necessário desestruturar o "loading"  dentro do render) */}
        <p>{ loading ? loadingElement : jokeObj.joke }</p>
        <button type="button" onClick={this.nextJoke}>Next Joke</button>
      </div>
    );
  }

  componentDidMount() {
    this.fetchJoke()
  }

}

export default DadJoke;
