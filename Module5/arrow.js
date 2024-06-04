let test1 = function() {
    console.log(1)
}

let test2 = function(a) {
    console.log(a + 2)
}

let test3 = function(a,b) {
    console.log(a + b)
}

test1()
test2(4)
test3(2,3)

/*
How to write arrow function - remove function keyword from each function and make arrow before curly braces.

*/

let test_t1 = ()=>  console.log(1)
let test_t2 = a=>  console.log(a + 2)
let test_t3 = (a,b)=> console.log(a + b)


test_t1()
test_t2(10)
test_t3(10,20)
