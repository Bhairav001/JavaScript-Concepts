
console.log(x)
var x=9

const fetchApiData = async() =>{
       try {
           const response = await fetch("https://localhost:3000/users/register")
           .then((res)=>res.json())
           .catch((error)=>console.log(error))
       } catch (error) {
        console.log(error)
       }
}

fetchApiData()