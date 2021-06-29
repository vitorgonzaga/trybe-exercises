// ******************************************************************
// spread operator
// ******************************************************************

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['limão', 'laranja', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'mel', 'açai'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));

// ******************************************************************
// Parâmetro REST
// ******************************************************************

// O rest converte os parametros em array, ja o spread operator converte o array em parâmetros (retira os colchetes)

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// ******************************************************************
// Parâmetro REST - Exemplo 2
// ******************************************************************

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
console.log(sum(4, 7, 8, 9, 60, 22, 34, 5, 6, 88, 234, 55, 32)); // 564

// ******************************************************************
// Object Destructuring
// ******************************************************************

// Permite declarar uma constante pela propriedade do objeto (isso evita a utilização de dot Notation)

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// Pela notação de ponto (dot notation):

const nameProduct = product.name;
console.log(nameProduct);

// Pela destructuring:

const { name } = product
console.log(name);

// É possível ainda atribuir um 'alias', ou seja, um 'apelido' para a propriedade

const { name: fullName } = product
console.log(fullName);

// Mais um exemplo, inclusive com renomeação da propriedade:

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: StudentName, b: classAssigned, c: subject } = student;

console.log(StudentName); // Maria (NESSE ARQUIVO JÁ HAVIA DECLARAÇÃO DE PROPRIEDADE === 'name', por isso utilizei 'StudanteName')
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


