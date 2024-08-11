/* two types of datatypes
    1->primitive = fixed size ,eg boolean ,integer,string  , -->>it create on stack memory
    2->reference = variable size ie size not fixed
    eg -> object , array, function ->> it create on heap memory -->> to access this heap memory we need a pointer/ reference chaiye hoga jo ki stack memory me banta hai
*/

/* object */
/*
 it is collection of key value pair
 key : value,

 let object = {

    name : "pratham",
    age : 20;
    weight : 55,
    walk : function functionName(parameter){
         ----
         ----
         ---
    },
 };
*/
/*
let object = {

    Myname : "pratham",
    "full name" : "pratham raj"
    // jab key key ka name me space hoga toh double inverted comma necessay hota hai lagana.
};

console.log(object);
console.log(object);
console.log(typeof(object));
console.log(object.Myname);
console.log(object["full name"]);
*/

/*
let obj = {
//  key : value pair
// heap me create hoga ye sab
    myName : "pratham raj",
    age : 21,
    weight : 55,
    height : 5.5,
    stream : "computer science and engineering",
    greet : function(){
        console.log("welcome pratham raj");
    }

};

console.log(obj);
obj.greet();

let obj2 = obj;// shallow copy created i.e naya data create nahi ho raha same data ko dusre obj2 se point karwa rahe hai. so obj2 me change kare ga toh obj me bhi effect karega
(by reference copy hui hai)

console.log(obj2);
obj2.greet();
*/

/*
let x = " pratham ";
let y = x; // yaha variable ka sath value copy hota hai referrence nahi
console.log(x);
console.log(y);
console.log("after");
y = "raj";
console.log(x);
console.log(y);
*/

/* for object how to avoid this   */
// by using shallow copy

// let obj={
//     name : "pratham"
// };
// let user = obj;
// user.name = " raj";
// console.log(user);
// console.log(obj);

// let obj={
//     name : "pratham"
// };
// // let user = Object.assign({},obj);
// let user = {...obj}; // this are the method of shallow copy
// user.name = " raj";
// console.log(user);
// console.log(obj);

// let obj={
//     name : "pratham"
// };

// let user = {...obj}; // this are the method of shallow copy
// user.name = " raj";
// console.log(user);
// console.log(obj);

// but this will not work on nested object exaple

// let obj={
//     name : "pratham",
//     address:{
//         city: 'purnea',
//         state: 'Bihar'
//     }
// };

// // let user = {...obj}; // this are the method of shallow copy
// let user = {...obj};
// user.address.city = "patna";
// // it also change in original obj. 
//  console.log(user);
//  console.log(obj);



// using Object.assign()
// let original = { a: 1, b: { c: 2 } };
// let shallowCopy = Object.assign({}, original);


// // Modify the nested object
// shallowCopy.b.c = 3;

// console.log(original.b.c); // Output: 3, because b is still referencing the same object

// using spread syntax

// let original = { a: 1, b: { c: 2 } };
// let shallowCopy = { ...original };

// // Modify the nested object
// shallowCopy.b.c = 3;

// console.log(original.b.c); // Output: 3, for the same reason



/* deep copy */
// let obj={
//         name : "pratham",
//     address:{
//          city: 'purnea',
//         state: 'Bihar'
//      }
//  };


// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "patna";
// // // NO change in original obj. 
// console.log(user);
// console.log(obj);

/*
let obj={
     name : "pratham",
     address:{
        city: 'purnea',
         state: 'Bihar'
     },
     message : function(){
         console.log("welcome to my world");   
     }
};


 let user = JSON.parse(JSON.stringify(obj));

// // deep copy me function work nahi karta hai 
user.address.city = "patna";
// // // NO change in original obj. 
console.log(user);
user.message();
// // user.message();
// console.log(obj);
 obj.message();
 obj.message();

*/
// we can solve this use by lodash.cdn


// const _ = require('lodash'); // Import Lodash

// let obj={
//      name : "pratham",
//      address:{
//          city: 'purnea',
//          state: 'Bihar'
//      },
//      message : function(){
//         console.log("welcome to my world");
//      }
//  };


//  let user = _.cloneDeep(obj);

// // // deep copy me function work nahi karta hai 
// user.address.city = "patna";
// // // // NO change in original obj. 
// console.log(user);
// user.message();
// // // user.message();
// console.log(obj);
// // obj.message();
// obj.message();


/* arrays  */
// it is the collection of items and elements

/*
let arr = [1,2,3,4,5,6];
console.log(arr);
console.log(typeof(arr));
// array constructor
console.log("second");
let brr = new Array('love',1,true,false);
console.log(brr);
console.log(typeof(brr));

console.log(brr[0]);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    
}
for(let i=0;i<brr.length;i++){
    console.log(brr[i]);
    
}
*/

/* built in method/function in array */

/*

    1-> push = insert at end
    2-> pop = remove from end
    3-> shift = remove leftmost element
    4-> unshift = add element on leftmost basically index '0'
    5-> slice = part of array ko pick karna -> shallow copy -> last element exclude karna hai
    6-> splice -> we can change the content of array -> remove,insert,
    7-> map
    8-> filter
    9-> reduce
    10-> sort
    11-> indexof
    12-> findof
 */


/*

let student = ["pratham",23,22,24,25,true,false,34,32,];
console.log(student);
student.push("raj");
console.log(student);
student.pop();
console.log(student);
student.shift();
console.log(student);
student.unshift("shivam");
console.log(student);
console.log(student.slice(2,5));
student.splice(1,4,"kumar");
console.log(student);
student.splice(1,0,"shiv");
console.log(student);
student.splice(1,"vansh");
console.log(student);

*/

// map 

// let arr = [10,20,30];
// let ans = arr.map((number)=>{
//     return number*number;
// })
// console.log(ans);

// let arr = [10,20,30];

// arr.map((number,index)=> {
//     console.log(number*number +1 );
//     console.log(index);
// })

// filter

// let arr = [ 10,20,30,32,11,34,22,345,43];

// let evenArray = arr.filter((number)=>{
//     return number%2 === 0;
//     // if(number%2 === 0){
//     //     return true;
//     // }
//     // else return false;
// })

// console.log(evenArray);

// let arr = [1,2,3,4,"pratham","raj",null,true,34,43,false,0/0];

// let str = arr.filter((value)=>{
//     return typeof(value) === 'number';
// });

// console.log(str);


// Reduce

// let arr = [ 10,20,30,40,50];

// let sum = arr.reduce((acc,curr) => {
//     return acc + curr;
// } , 0); // accululator value is initalizing with 0 and current having a index 0 value and their result store in accumulator
// console.log(sum);

// let sum = arr.reduce((acc,curr) => {
    // return acc + curr;
// }); // in this accumulator is not initializing so at this time accumulator value is your index 0 value and currnt is your index 1 ie next to accumulator and their result store in accumulator
// console.log(sum);

// sort

// let arr = [ 1,2, 4,22,12,43,21,5,23,54,43];
// arr.sort();// this sort happen in lexicographical order 
// console.log(arr);


// let arr = [ 1,2, 4,22,12,43,21,5,23,54,43];
// arr.sort((a, b) => a - b); // ascending order
// console.log(arr);
// arr.sort((a, b) => b - a); // decending order
// time complexity of this built in function is O(n*n) 

//indexof 

// let arr = [1,3,4,5,6,7,32];
// console.log(arr.indexOf(6));
// console.log(arr.indexOf(61)); // if not present it will give -1

// find
/*

let num = [12,3,4,5,6,22,34,66,43,41,46,67,75];
// let evenNo = num.find((num) => num%2 === 0); // it give the first element which satisfies this condition
// console.log(evenNo)

let No = num.find((num) => num == 0); // it give the first element which satisfies this condition if not present in array give "undefined"
console.log(No)

*/

/*
let arr = [10,20,30];
let length = arr.length;
console.log("length : ",length );

for(let i = 0 ; i < length ; i++){
    console.log(arr[i]);
}

console.log("using forEach loop");

// forEach loop
arr.forEach((val,index)=>{
    console.log("number:",val,"index:",index);
})
 */

/*
// for in loop
let obj = {

    myName : "pratham",
    age : 21,
    height : 5.5,
    weight : 55,
    greet: function(){
        console.log("welcome pratham raj");
    }
};

for(let key in obj){
    console.log(key," ",obj[key]);
}
obj.greet();

*/

// for of loop

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

/*
let myName = "pratham Raj";
for(let val of myName){
    console.log(val);
}
*/

let arr = [10,20,30,40,50,60];

// function getSum(arr){
//     let len = arr.length;
//     let sum=0;
//     for(let i=0;i<len;i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// function getSum(arr){
//     let sum = 0;
//     arr.forEach((val)=>{
//         sum+=val
//     })
//     return sum;
// }

// let getSum = function (arr){
//     let sum = 0;
//     arr.forEach((val)=>{
//         sum+=val
//     })
//     return sum;
// }

// arrow se function create kia hai
let getSum = (arr) => {
    let sum = 0;
    arr.forEach((val)=>{
        sum+=val
    })
    return sum;
}
console.log(getSum(arr));