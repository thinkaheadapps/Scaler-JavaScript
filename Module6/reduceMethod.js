// You need the sum of every element in an array

let arr = [1,2,3,4,5,6,7,8,9,10];
let result = 0;

for(let i = 0; i < arr.length; i++) {
    result = result + arr[i];
}

console.log(result);

// Reduce method

let resultReduce = num.reduce(function(ace,value) {
 let updatedSum = acc + value;
 return updatedSum;
}, 0)