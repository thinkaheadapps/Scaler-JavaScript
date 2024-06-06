// Methods and properties from base class can be passed into derived class

class Person {
constructor(_name,_age) {
        this.name = _name;
        this.age = _age;
    }
} 

class Teacher extends Person {
constructor(_name, _age, _classStrength) {
    super(_name , _age)
    this.classStrength = _classStrength
}

}

class Student extends Person {
    constructor(_name, _age, _cgpa) {
        super(_name , _age)
        this.cgpa = _cgpa
    }
}

let Person1 = new Person('Adam', 23);
console.log(Person1);

let Teacher1 = new Teacher('Mark', 40, 30);
console.log(Teacher1);

let Student1 = new Student('Mark', 10, 8);
console.log(Student1);

