let arr = [1, 2, 3, 4, 5];
let squareArray = [];

for(let i = 0; i < arr.length; i++) {
    //squareArray[i] = arr[i] * arr[i];
    //using pusg function
    squareArray.push(arr[i] * arr[i]);
}

console.log(squareArray)

//Higher order function - map - its already build in java script
// Map will loop through every element of your array and will perform specific operations that you have provided
//Map method will always return a new array with your result


let num = [1 , 2 , 3, 4, 5];

let resultSquare = num.map(function(n) {
    return n*n;
})

console.log(resultSquare);

/*
const transactions = [1000, 30000, 40000, 2000, -898, 3800, -4500];
const inrToDollar = 80;
*/

const transactions = [1000, 30000, 40000, 2000, -898, 3800, -4500];
const inrToDollar = 80;

let inrToDollarArr = transactions.map(function(n) {
    return inrToDollar * n;
});

console.log(inrToDollarArr);

//Using arrow function

let transactionsInDollar = transactions.map((num)=> {
    return (inrToDollar * num).toFixed(0) ;
})

console.log(transactionsInDollar);


