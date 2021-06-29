const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// Atentar para o formato objeto como output. Ĺembre-se de armazenar o objeto numa variável onde cada chave (declarada manualmente ou não)receberá um tratamento específico.

function studentAverage() {
  const getSum = (acc, curr) => acc + curr
  const output = students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce(getSum, 0) / grades[index].length),
    }));
    return output;
  };

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);