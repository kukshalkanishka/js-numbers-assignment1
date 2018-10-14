let sum = 0;
let index = 1;
let seriesLength = 10;
let firstValue = 0;
let secondValue =1; 
let previousValue = 0;
for(;index < seriesLength; index++){
  if(index == 0){
    console.log(firstValue);
  }
  sum = firstValue + secondValue;
  console.log(sum);
  secondValue = firstValue;
  firstValue = sum;
}


