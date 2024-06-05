/*
We have to check even number in an array and put them in seperate array.
*/

const arr = [ 1,2,3,4,5,6,7,8,9];

let evenArray = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        evenArray.push(arr[i])
    }
}

console.log("Even array : ", evenArray);

// Filter method - is used to check the condition
// Filter returns a new Array it will return all those elements that matches the specified condition
// if the condition is tute it will return the element for that condition and if it is false it will return 

let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter(function(n) {
    return n % 2 == 0;
})

console.log(evenNum);

//check all positive value in transactions array
const transation = [1000,2000,3000,4000, -898,, -4500];

let transactionsPositive = transation.filter(function(n) {
    return n > 0;
});

console.log(transactionsPositive);
