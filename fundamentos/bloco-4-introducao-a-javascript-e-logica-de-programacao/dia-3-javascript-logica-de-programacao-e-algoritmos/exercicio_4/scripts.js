let n = 5;
let symbol = "*";
let inputLine = "";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let index = 0 ; index <= midOfMatrix; index += 1) {  
  for (let secondIndex = 0; secondIndex <= n; secondIndex += 1) {    
   if (secondIndex > controlLeft && secondIndex < controlRight) {
     inputLine = inputLine + symbol
   } else {
    inputLine = inputLine + " "
   }    
  }
  console.log(inputLine);
  inputLine = "";
  controlLeft -= 1;
  controlRight += 1;
};
