let n = 5;
let char = "*";
let inputLine = "";
let inputPosition = n;

for (let index = 0; index < n; index += 1) {
  for (let secondIndex = 0 ; secondIndex <= n ; secondIndex += 1) {
    if (secondIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + char;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
}