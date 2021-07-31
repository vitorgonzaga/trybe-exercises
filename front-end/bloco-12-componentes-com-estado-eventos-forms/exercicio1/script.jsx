import React from 'react';


class App extends React.Component {

  constructor() { // é uma função 'default'
    super() // sobrescreva / superioridade / prioridade
    // considerando que as funções declaradas dentro da classe não enxergam o this
    // é necessário vincular cada função utilizando a sitnaxe "bind" dentro do constructor
    // conforme abaixo:
    this.handleClick = this.handleClick.bind(this)
    // bind em inglês sifnifica "ligar", ou seja, estamos ligando o a propriedade this na função
    // Isso ocorre porque o javascript originalmente não foi feito para utilizar classes.
    // O bind é necessário para "ligar" essa ponta que fica solta nas funções declaradas dentro das classes.

    // Declarando o estado inicial que é um objeto padrão
    this.state = {
      numeroDeCliques: 0
    }

  }


  handleClick() {
    // A função, por padrão, não consegue enxergar o "this"
    // Considerando que a função já está vinculada ao this no constructor
    // falta "setar" o comportamento do estado (evolução)
    this.setState((estadoAnterios, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    // O setState é uma função que exige menção de 2 parametros (estadoAnterior, props)
    // Atenção para o paranteses antes das chaves, pois é o que se espera na arrow function
    // quando o retorno esperado seja um objeto, nesse caso, o objeto state.
    console.log('Clicou!');
  }

  render() {
    // O render é capaz de reconhecer a função dentro da classe utilizando "this."
    // mas a função não consegue enxergar o this. Apesar do evento conseguir chamar a função
    // a função não consegueria armazenar o estado, por isso é necessário utilizar o "bind"
    return (
      <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    );
  }
}

export default App;
