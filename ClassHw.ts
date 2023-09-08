// Display class data using advanced features of typescript
class Animal {
    constructor(protected name: string) { }

    speak(): void {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name: string, private breed: string) {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} barks`);
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }
}

class Cat extends Animal {
    constructor(name: string, private color: string) {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} meows`);
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Color: ${this.color}`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Calico");

dog.displayInfo();
dog.speak();

cat.displayInfo();
cat.speak();
