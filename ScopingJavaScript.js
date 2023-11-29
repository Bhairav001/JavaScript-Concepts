//What is Scope Chain and Lexical Enviorment/Scope in JS?

/*
Scope - as a boundry hota hai, kis boundry tak varibale ko access kr sakate hai
jo boundry ka area hota hai usko bolte hai scope

Lexical Envornemt
hirarchy- its nested things
ek function, uske under ek function, uske under ek function

*/

// {
//     //data  
// }

//block of code is lexical envorment 


//its create lexical envormnet

function abc(){
    let a=5
    function xyz(){
        console.log(a)
    }
    xyz()
}
abc()

//inner function varibale ko apane khud ke area ko lexical envorment ko bhi access krta hai
//Aour parent ko bhi lexical envorment ko bhi access kr leti hai
