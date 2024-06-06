function createCar(_name, _company, _color) {

    this.name = _name;
    this.company = _company;
    this.color = _color

    this.drive = function() {
        console.log('I am driving ${this.name} and id of ${this.color} color');
    }
}

let car1 = new createCar('X4','BMW','Red');
car1.drive();

let car2 = new createCar('S-class','BMW','White');
console.log(car1.name);
console.log(car1);
console.log(car2);
