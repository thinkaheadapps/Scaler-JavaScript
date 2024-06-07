class Animal {
    sound(){
        console.log("Animal makes different sound");
    }
}

class Dog {
    sound(){
        console.log("Dog Barks");
    }
}

class Cat {
    sound(){
        console.log("Cat Mews");
    }
}

let Animal1 = new Animal();
Animal1.sound();

let tommy = new Dog();
tommy.sound();

let percy = new Cat();


percy.sound();
