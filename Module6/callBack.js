function printFirstName(firstName,cb) {
    console.log(firstName)
    cb("Roger")
}

function printLastname(lastName) {
    console.log(lastName)
}

// Callback function
printFirstName("Steve", printLastname);

//Application for using callback function
// isEven

//Here its printing function Name [Function: isEven]

const number = 10;
const isEven = (number)=> {
    if(number % 2 == 0) {
        return number % 2;
    } 
}
console.log(isEven)

const isEvenTrue = (n)=> {
 return n%2 == 0
}

console.log(isEvenTrue)

//Another example
let printResult = (evenFun, num)=> {
    const isNumEven = evenFun(num)
    console.log('the number ${num} is an even number ${isNumEven}');
}
 
printResult(isEven,9);

