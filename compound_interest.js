let principle = 5000;
let rate = 10;
let time = 4;
let amount = 0;
let value = Math.pow((1 + (rate/100)), time);
console.log((principle * value) - principle); 

