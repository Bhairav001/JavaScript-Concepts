/*
prototype is a fundamental concepts related to object-oriented
programming. Each object in javascript has a prototype, which is an object
itself. 
the prototype is used to share properties and methods among multiple
objects, 



*/


function Person(name){
    this.name= name
}

Person.prototype.sayHellow = function(){
    console.log("Hello, my name is", this.name)
}

const person1 = new Person("gotam")
const person2 = new Person("bhairav")

person1.sayHellow()

//prototype - 

