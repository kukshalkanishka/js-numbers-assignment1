let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let divident = 1;
let greatestCommonFact= 1;
for(;divident <= firstNumber; divident++){
  if((firstNumber % divident == 0) && (secondNumber % divident == 0)){
    greatestCommonFact = divident; 
  }
}
console.log(greatestCommonFact);
