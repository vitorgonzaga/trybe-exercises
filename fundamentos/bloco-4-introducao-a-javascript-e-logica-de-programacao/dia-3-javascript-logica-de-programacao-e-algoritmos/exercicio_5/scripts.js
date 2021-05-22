let n = 7;
let symbol = "*";
let inputLine = "";

let midOfMatrix = (((n + 1) / 2)-1)
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex < n; lineIndex += 2) {
  for (let ColumnIndex = 0; ColumnIndex < n; ColumnIndex += 1) {
      if (ColumnIndex == controlLeft || ColumnIndex == controlRight || lineIndex == (n-1))  {
        inputLine = inputLine + symbol;
      } else {        
        inputLine = inputLine + " ";
      }    
  }  
  console.log(inputLine);
  inputLine = "";
  controlLeft -= 1;
  controlRight += 1;
  
}