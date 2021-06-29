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

// Uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

const newProduct = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// Contudo cabe lembrar que o nome da propriedade deve existir no objeto que a função esperar receber, caso contrário, uma alternativa seria atribuir uma valor padrão.

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(newProduct); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// ******************************************************************
// ARRAY Destructuring
// ******************************************************************

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Para Fixar
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [strSaudacao, fnSaudacao] = saudacoes;

console.log(strSaudacao);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// ***************************************************************************************************
// Solução que eu pensei...
// const animais = ['gato', 'água', 'arroz'];
// const [animal, bebida, comida] = animais;

// console.log(comida, animal, bebida); // arroz gato água
// ***************************************************************************************************

// ***************************************************************************************************
// Gabarito
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// ***************************************************************************************************

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12];

// Poderia fazer um map:

const extractEvenFromArray = (array) => array.map(item => item % 2 === 0 ? item : '')

console.log(extractEvenFromArray(numerosPares));

// ******************************************************************
// Default Destructuring
// ******************************************************************

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
// Basta atribuir um valor ao parâmetro 'nationality' com sinal de igual e o valor (int, string, float, obj, array etc...)

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// ******************************************************************
// Default Destructuring
// ******************************************************************

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .

const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));