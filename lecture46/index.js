/*
    variable scoping
    -> global scoping
    -> function scoping
    -> block scoping
*/


// block scope except for var keyword
// {
//     let a = 34;
//     console.log(a);
// }
// console.log(a);// a is not defined for this 

/*
console.log(a);// give undefined
{
    var a = 33;
    console.log(a); // 33
}
console.log(a);//33
*/

// global scope -> we can use any where in this file without any difficulty

// var age = 23;
// console.log(age);
// if(true){
//     console.log(age);
// }
// function sayHello(){
//     console.log("hi ",age);
// }
// sayHello();


//funciton scoping

/*
function sayHello(){
    var fname = "earth";
    console.log("hello ",name);
}
console.log(fname); // fname is not defined

*/

/* Temporal Dead Zone */

/**
console.log(marks);
console.log("pratham");
console.log("raj");
let marks = 33;
console.log(marks);
// line no 52 to 55 known as temporeal dead zone because we can not access marks  so it gives error 
 */