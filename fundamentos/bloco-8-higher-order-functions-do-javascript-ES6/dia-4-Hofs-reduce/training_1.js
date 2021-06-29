const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = numbers.filter(number => number % 2 === 0 ? number : 0).reduce((acc, curr) => acc + curr, 0);

console.log(sumEvenNumbers);

// const sumPair = (currValue, number) => ((number % 2 === 0) ? currValue + number : currValue);

const sumEvenNumbersJustReduce = numbers.reduce((acc, curr) => ((curr % 2 === 0) ? acc + curr : acc), 0);

console.log(sumEvenNumbersJustReduce);