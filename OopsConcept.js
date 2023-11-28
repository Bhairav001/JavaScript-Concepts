/*
Oops is follow moduler programming
meand its readable code to other developer, its follow some structure some pattern
basically write clean code achive

classes - classes is a blue print of creating object, its like template
objects  - object is non-primitive data types, contruction function or object literal
Abstraction - hinden behind complexity, achive encapulation concepts
Encapulation - encapulation to hiddin some data there
Inheritance - Inheritate to other property like parend to child 
Polymorphism - achive multiple series


*/

class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }
    myCar(){
        console.log(`the car name is ${this.name} and car model is ${this.model}`)
    }
}

const carDetails = new Car("BMW",2023)
carDetails.myCar()