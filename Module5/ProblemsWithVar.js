var a = 21
var a = 35

//In other language this is not allowed
console.log("a:", a)

//Issues with var keyword
//1. redeclaration of same variable is allowed
//2. Scoping issue - variable declared with var keyword are not blocked or functional scope

var a = 35
if(a == 35) {
    var b = 40
    console.log("b: ", b)
}

console.log(b)

function test() {
    var c = 100
    console.log("C:",c)
}

test()
//console.log("Value of c outside block:",c)
