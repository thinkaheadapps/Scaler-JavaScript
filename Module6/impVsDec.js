// we will be given a number and we have to check that if the square of that number is even or not


/*
Imperative way
*/ 
const a = 4
const squareA = a * a;

let isEven;

if(squareA % 2 == 0) {
    isEven = true;
 } else {
    isEven = false;
}

console.log(isEven)