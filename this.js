//this is owener of the object

//this is object
//this is global object
// is determine the situation and scenario

let person1={
    name:"abc"
}

let person2={
    name:"xyz"
}

function myName(){
    console.log(this.name)
}

myName.call(person2)


let myObject={
    name:"bhairav",
    age:34
}

function myDetails(greeting){
   console.log(greeting, myObject.name, this.age)
}

myDetails.call(myObject,"Hi")