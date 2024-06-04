function add(a , b) {
    console.log(a + b)
}

add(2, 3)

//function as expression 
var addVal = function(a, b) {
    console.log(a + b)
}

addVal(3, 4)

//
var sum = addVal
var result = sum(9,10)
console.log(result)
