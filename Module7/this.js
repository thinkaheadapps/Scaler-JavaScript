


//1. Node js Non strict mode
console.log(this) // will get {} empty object

//2 
function displayThis() {
    console.log(this);
}

//displayThis(); //This will refer to global object

// 3. Object itself

let myObject = {
    name : "ABC",
    age : 25,
    myFn1 : function() {
        console.log(this);
    }

} 

myObject.myFn1();

//4. 
let myObject2 = {
    name : "ABC",
    age : 25,
    myFn2 : function() {
        function myFn3() {
            console.log(this);
        }
        myFn3();
    }

} 

myObject2.myFn2() //Again Global object







