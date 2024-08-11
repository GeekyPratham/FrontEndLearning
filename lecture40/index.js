// variables and datatypes
/*
    variables-> named memory location
    in every language c,c++,js,java we use variable for handling data.

    we use (let,var,const) for defining variables
    var  a = 40;
    let  a = 34;
    const a = 23;


*/

// var age = 48;

// if(true){
//     console.log(age);
// }

// function solve(){
//     var age = 43;
//     console.log(age);
// }
// // console.log(age);
// solve();

// var x= 34;
// console.log(x);
// var x = 45;
// console.log(x);
// var x = "pratham";
// console.log(x);

/*
redefination possible and redecleration  possible but we face issue while debugging as of same variable name 
*/

// let age =34;  // let is bloked scoped i.e it scope within the function in which it is decleared.
// console.log(age);

// {
//     let a = 23;
// }
// console.log(a);


/*
let a = 34;
console.log(a);
let a = 33; // redecleration not possible when we using let
console.log(a);
*/

/*
let a = 12;
console.log(a);
a=34;
console.log(a);
*/

/*
let a = 10;
console.log(a);
a = "pratham";
console.log(a);
a=true;
console.log(a);
a=null;
console.log(a);
*/

// dur to above we called it dynamic decleared

/*
const a = 12;
console.log(a);
a=34; // we can not reassigned and redecleared the variable of const (a );
console.log(a);
*/

// variable naming convention:->
/*
    1-> we can use number,_,$
    2-> there is no space between name
    3-> camelCase
    4-> meaningful
    5-> dont use reserve keywords
*/


// Datatypes
/*
 Datatypes is of two types :->
 1-> primitive datatypes:-> number,string,boolean,undefined,null,bigInt etc

 2-> non-primitive datatypes:-> object,arrays etc

*/
// undefined will print if value is not assigned to variable.

// typeof() it is used to check which type of data it is.

// let a = "pratham";
// console.log(typeof(a));

const sym1 = Symbol(4);
const sym2 = Symbol(4);
console.log(sym1 === sym2);