//Loops are the statements that we can use to control the flow of program and do some repetative tasks

var a = "Hello World"
for(var i = 0; i < 10; i++) {
console.log("Hello", i)
}

// You have an array and square each element of array and store in same array - Copy  in same array

var num = [1,2,3,4,5,6,7,8]
for(var i = 0; i < num.length; i++) {
    var temp = num[i]
    temp = temp * temp
    num[i] = temp
}

console.log("Square Array = :", num)

// Copy in different array
var num1 = [1,2,3,4,5,6,7,8,9]
var squareArray = []

for(var i = 0; i < num1.length; i++) {
    squareArray.push([num1[i]*num1[i]])
}
console.log("Original Array :", num1)
console.log("Square Array :", squareArray)