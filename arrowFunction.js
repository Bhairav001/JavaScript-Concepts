//sugar syntax

//easear to use
// this keywords not access
// bind method not allows 


/*
1.Arrow Function 
thers is only one expression
they don't have their won this, arguments, super and new.target bindings

const add = (a,b)=>a+b

*/
let obj={
    name:"bhiarav",
    fname:()=>{
        console.log(this.name)
    },
    lname:function(){
        console.log(this.name)
    }
}

// obj.fname()
// obj.lname()


let object = {
    name:"gotamwadi",
    city:"kolhapur",
    village:function(){
        console.log(this.name)
    },
    city:()=>{
        console.log(this.city)
    }
}

object.village()
object.city();






// function Person() {
//     this.age = 0;
  
//     setInterval(() => {
//       // 'this' refers to the Person instance
//       this.age++;
//       console.log(this.age);
//     }, 1000);
//   }
  
//   const person = new Person();

// function Person() {
//     this.age = 0;
  
//     setInterval(function() {
//       // 'this' may not refer to the Person instance
//       this.age++;
//       console.log(this.age);
//     }, 1000);
//   }
  
//   const person = new Person(); // This may not work as expected


// function Person(){
//     this.count=0;
//     setInterval(()=>{
//          this.count++
//          console.log(this.count)
//     },1000)
// }
// Person()

let myObj={
    name:"gotam",
    age:34,
    myFunction:function(){
        console.log(this.name)
    },
    myArrowFun:()=>{
       console.log(this.age)
    }
}
myObj.myFunction()
myObj.myArrowFun()