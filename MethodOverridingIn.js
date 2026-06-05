class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}

let dog = new Dog();
dog.sound();