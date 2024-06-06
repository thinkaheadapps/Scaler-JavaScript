class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;

    }
    welcome() {
        console.log('Welcome ${this.name}')
    }

}

let Person1 = new Person('Adam', 19);
let Person2 = new Person('Steave', 25);
let Person3 = new Person('MARK', 61);

console.log(Person1);
Person1.welcome();
console.log(Person2)