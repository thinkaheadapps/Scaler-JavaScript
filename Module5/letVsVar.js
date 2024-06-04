var a = 20
let b = 30
console.log("a:",a)
console.log("b:",b)

//redeclare var  a
var a = 30
console.log("updated a:", a)

//update b - let - we are not allowed to redclare it
b = 50
console.log("Updated b:", b)


if(true) {
    let c = 40
    console.log(c)
}
// if we are using let keword its not accessible outside code bloak
//console.log("C outside the code block :", c)

//we are re assign let keword.

//const keyword - similar to let keyword of let - swift
//const keoword does not allow redeclation
//const keyword does not allow reassign
//const keyword is block safe




