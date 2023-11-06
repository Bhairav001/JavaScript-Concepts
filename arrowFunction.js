//sugar syntax

//easear to use
// this keywords not access
// bind method not allows 

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



