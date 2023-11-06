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