
let object={
    name:"Bhairav"
}

function greet(msg){
    console.log(msg+" "+"my name is"+" "+this.name)
}

greet.call(object,"Hello");

greet.apply(object,["Hi"])

let nameVar = greet.bind(object,"awasome");

nameVar();
