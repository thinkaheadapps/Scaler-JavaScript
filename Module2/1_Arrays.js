//Arrays provides you an ordered collection of data

var arr = [1, 2,"Ab",true, 12.4]
console.log(arr)

//accessing the elements
var val1 = arr[0]
console.log(val1)

//Rplace element of array
arr[2] = 14.5
console.log(arr[2])

//length 
console.log("length of the array is ", arr.length)

// inbuild methods of arrays
// 1. 

var arr2 = [12,14,56,57]

//1. pop() method
arr2.pop()
console.log("Popped array ", arr2)

//what value popped
var p1 = arr2.pop()
console.log("Popped Value",p1)

//2. push()
arr2.push(100)
console.log("Pushed Array: ",arr2)

//Shift - remove an elemnt from statting of array

var s1 = arr2.shift()
console.log("Shifted value ", s1)

//unshift - adda value at starting pf array
arr2.unshift(101)
console.log("array after unshift", arr2)





