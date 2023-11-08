/*

Railway Station pe jate ho, reservation form ka example

Class and Object
class is template;
kya nam likhu, 
object banana hai,


*/

class ReailwayForm{
    submit(){
        console.log("form submited")
    }
    cancel(){
        console.log("This form is cancelled")
    }
}

let bhairav = new ReailwayForm();

let rohan = new ReailwayForm();

bhairav.submit()

rohan.submit();

rohan.cancel()


let arr =[
    {
        name:"bhairav",
        age:35
    },
    {
        name:"ramesh",
        age:33
    },
    {
        name:"omkar",
        age:22
    }
]

arr.sort((a,b)=>{
   if(a.age>b.age) return -1
   if(a.age<b.age) return 1
   return 0
})
console.log(arr)