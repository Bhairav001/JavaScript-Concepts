/*

Closures



*/


function greet(){
    let x=6;
    return function(){
        console.log(x)
    }
}

let y=greet()
y()
