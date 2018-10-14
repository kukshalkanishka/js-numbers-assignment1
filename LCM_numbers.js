let firstNumber = 30;
let secondNumber = 150;
let divident = 1;
let commonFactor = 1;
let firstNumFactor = 1;
let secondNumFactor = 1;

for(;divident <= firstNumber; divident++){
  if((firstNumber % divident == 0) && (secondNumber % divident == 0)){
    commonFactor = divident;
  }
}
firstNumFactor = firstNumber / commonFactor;
secondNumFactor = secondNumber / commonFactor;
console.log(commonFactor * firstNumFactor * secondNumFactor);


