/* callstack and hoisting */

/*
 
  hoisting -> it is process in which whenever we decleare the var or function it shift them to the top in their scope.
  varivable keyword only made by var keyword.

*/



// sayMyName("Pratham Raj"); 

/* 

upar me call kia hai tab bhi print kar raha hai isi ko function hoisting khete hai
 
*/

// function sayMyName(fullName){
//     console.log(fullName);
// }
// sayMyName("Pratham Raj");


// it will not work on function written in the form of function expression 
// it will give reference error

// sayHello();
// let sayHello = function(){
//     console.log("how are you?");
// }



/*
// console.log(age); this  will not work because we used let key word for decleare it give reference error
// let age = 29;
// console.log(age);

/*
{
console.log(age); // this will also work but gives undefined kyoki function ka kase me pura function upar shift ho jata hai magar variable ke case me sirf varable decleare shift hota hai (var age;)  khali islia undefined aaya
var age = 39;

console.log(age);
}
*/


/** why function is called first class citizen
 * 
 * it assign as variable
 * it passes as argument
 * we can return function
 * we use function in data structure
 * funciton property
 * 
 */

// let greet  = function(){
//     console.log("hello world");
// }
// greet();

// function greetMe(greet,fullName){
//     console.log("hello",fullName);
//     greet();
// }
// function greet(){
//     console.log("welcome to my world");
// }
// greetMe(greet,"pratham raj");


/*
function square(number){
    return function(number){
        return number*number;
    }
}

let ans = square(5);
// let ans = function(number){
//     return number*number;
// }
let finalAns = ans(10);
console.log(finalAns);

*/

// array of function
// function ko data structure ka ander store karna

/*

const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
];

let first = arr[1];
let ans = first(5,3);
console.log(ans);

*/

let obj = {
    age : 25,
    wt : 35,
    ht : 344,
    greet : ()=>{
        console.log("hello duniya")
    }
}
console.log(obj.age);
obj.greet();