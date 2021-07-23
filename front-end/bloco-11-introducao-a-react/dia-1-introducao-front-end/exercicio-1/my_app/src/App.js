import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrTaks = ['Acordar', 'Escovar os dentes', 'tomar um cafezinho', 'estudar react'];

const listResult = arrTaks.map((task) => <li>{Task(task)}</li>);

function App() {
  return (
  <ul className='olStyle'>Lista de Tarefas
  {listResult}
  </ul>
  )
}

export default App;
