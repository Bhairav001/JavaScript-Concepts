class RailwayForm{
    submit(){
       console.log("form submmited")
    }
    cancel(){
       console.log("form cancelled")
    }
}

let bhairav = new RailwayForm()
let rohan = new RailwayForm()

bhairav.submit()
rohan.submit()
rohan.cancel()