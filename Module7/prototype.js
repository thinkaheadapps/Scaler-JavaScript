// We are going to explore this concept in brower
/*

make changes in index.html file 
<script src="../Module7/prototype.js"></script>


*/

//alert("Hello from prototype js");

let testObj = {};
console.log(testObj);

let person1 = {
    name: 'Adam',
    age : 25
}

console.log(person1);
console.log(person1.hasOwnProperty('gender'));
console.log(person1.hasOwnProperty('name'));
//alert(person1.hasOwnProperty('gender'));

function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

let Person2 = new Person("Rivera", 60);
console.log(Person2);