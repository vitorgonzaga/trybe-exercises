let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

tasksList.push('Fazer exercicios da Trybe');
console.log(tasksList);

tasksList.pop();
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
