
let obj={
    name:"Bhairav"
}

function greet(msg){
     console.log(msg+" "+this.name)
}

greet.call(obj,"Hi");

greet.apply(obj,["Hello"])

let newFunction = greet.bind(obj,"Awasome")
newFunction()


let handleThis={
    name:"pune",
    a:function(){
        console.log(this.name)
    },
    b:()=>{
        console.log(this.name)
    }
    
}
handleThis.a()
handleThis.b();


class Vehicals{
    constructor(name,model){
        this.name=name,
        this.model=model
    }
    myVehical(){
        console.log(this.name+this.model)
    }
}

const myCars = new Vehicals("BMW",2019)
myCars.myVehical()