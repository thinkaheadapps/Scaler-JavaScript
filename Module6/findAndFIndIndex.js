// Find returns the first element of an array that satisfy the condition

const transactions = [1000, 3000, 4000, 2000, -898, -3800, -4500];
let firstWithdraw = transactions.find(function(n) {
    return n < 0;
})

console.log("First Withdrawl Element: ",firstWithdraw);

// FindIndex

let firstWithdrawIndex = transactions.findIndex(function(n) {
    return n < 0;
})

console.log("Index: ",firstWithdrawIndex);