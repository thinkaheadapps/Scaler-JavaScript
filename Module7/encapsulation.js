// Encapsulation means hiding data
//Keep your functions and methods accessible inside the class only and do not allow it to change outside the calss.
/*
Encapsulation in JavaScript is a concept that restricts direct access to an object's properties and methods, maintaining a level of abstraction and protecting the internal state of the object.
This is achieved by defining private properties and methods within a function scope and exposing only what is necessary through public methods.
*/

function Person(_name, _age) {
    let name = _name;  // Private property
    let age = _age;    // Private property

    this.getName = function() {  // Public method
        return _name;
    };

    this.getAge = function() {
        return _age;
    };

    this.setAge = function(newAge) {
        _age = newAge
    }

    this.setName = function(newName) {  // Public method
        _name = newName;
    };
}

const person = new Person("John", 50);
console.log(person.getName());  // Accessing private property via public method
console.log(person.getAge());
person.setName("Doe");
person.setAge(45);
console.log(person.getName());
console.log(person.getAge());