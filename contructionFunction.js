//understanding this keywords
///object literal: {name:"batman"}

//contruction function



// function PuneCompanies(tsc,wipro,senwell){
//     this.tsc=tsc
//     this.wipro=wipro
//     this.senwell=senwell
// }
// const allCompanies = new PuneCompanies("tsc-Phase-1","wipro-phase-2","senwell-kharadi")
// console.log(allCompanies)

/*

1. Understanding of "this" keyword
2. functions can help us contruct objects
3. constructor functions server as a blueprint for creating objects
4. controlling where "this" belongs
5. Why and when to use call, apply and bind


How are we creating Objects in JavaScript
1. Object Literal

var a ={name:"Batman"}

But, to create multiple objects of the same type, the object literal method is ineficient but we have a solution.

Contructor functions

1. we can create objects in Js using functions as well
2. This is one example of creating an object using a function




*/

function Player(name,team){
    this.name = name;
    this.team=team;
}

var myObj = new Player("Cristiano ronaldo","Portugal");

//this is simmilar of above code

//we can notice, "this" is replaced by myObj;


let myObj={};

function TeamPlayer(name,team){
    myObj.name=name;
    myObj.team=team;
    return myObj
}

let match = TeamPlayer("sachin","india");
console.log(match)

