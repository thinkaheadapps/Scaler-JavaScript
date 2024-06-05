let arr = [1, 2, 3, 4, 5];
let squareArray = [];

for(let i = 0; i < arr.length; i++) {
    //squareArray[i] = arr[i] * arr[i];
    //using pusg function
    squareArray.push(arr[i] * arr[i]);
}

console.log(squareArray)

//Higher order function - map - its already build in java script

let num = [1 , 2 , 3, 4, 5];

let resultSquare = num.map(function(n) {
    return n*n;
})

console.log(resultSquare);