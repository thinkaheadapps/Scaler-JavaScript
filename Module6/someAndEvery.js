//Some - Condition Check: To get true or false based on a condition
// it will return true if even 1 condition

const transactions = [1000, 3000, -4000, -2000, -898, -3800, -4500]

let resultSome = transactions.some(function(n) {
           return n > 0;
})

console.log(resultSome)

//Some will check for only one element
//everySome will check for every element

let resultEvery = transactions.some(function(n) {
    return n > 0;
})

console.log(resultEvery)
