const person ={
    fname:"bhairav",
    lname:"gotam"
}

function introduce(greeting){
       console.log(greeting+" "+"my name is"+" "+this.fname+this.lname)
}


introduce.call(person,"Hello");

introduce.apply(person,["hiiii"])

    
const greetFunction = introduce.bind(person,"Hey")

greetFunction()

//let name; variable declared but not assigned


const nameObject={
    name:"dummy"
}
function greet(msg){
    console.log(msg+" "+"my name is bhairav"+" "+this.name)
}

greet.call(nameObject,"hi")
greet.apply(nameObject,["awasome"])

let varableObject = greet.bind(nameObject,"someawasome")
varableObject();