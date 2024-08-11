// class Human{

const { concat } = require("lodash");

//     // properties
//     #fullname = "pratham";
//     // by using "#" make it is private so we can use only this within class

//     age = 21; // this is public so we can use this within class or outside the class becaues no "#"uses
//     wt = 57;// public
//     ht;

//     // constructior ki help se variable ko initialize kar sakte hai
//     constructor (newAge,newHeight,newName){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#fullname = newName;
//     }


//     // behaviour

//     walking(){
//         console.log("i am walking ", this.#fullname);
//         // this is the method to access private member inside the class
//         // this. ka matlab current object ka private wala access karna chate hai

        
//     }

//     running(){
//         console.log("i am running");
//     }

//     // for outside the use of private memmber we use the getter and setter function

//     get fetchName(){
//         return this.#fullname;
//     }
    
//     set modifyName(newName){
//         this.#fullname = newName;
//     }
// }

// let obj = new Human(22,5.9,"shivam");
// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.fetchName);// this give error because it is private
// obj.walking();

/* default parameter */

// function sayName(myName = "raj"){
//     console.log("my name is  ", myName);
// }
// //  sayName();//undefined
// sayName("pratham raj");
// sayName();

// function sayName(firstName="shivam" , lastName = "raj"){
//     console.log(" my name is : ",firstName," ",lastName);
// }
// // sayName("pratham","raj");
// sayName("pratham");
// sayName();


// interdependent parameter

// function sayName(firstName="shivam" , lastName =firstName.toUpperCase()){
//     console.log(" my name is : ",firstName," ",lastName);
// }
// // sayName("pratham","raj");
// sayName("pratham");
// sayName();

// 
/* your default parameter is object or arrays */

// function config(value = {age: 21,wt:57,ht:5.7,fName:"pratham"}){
//     console.log("this is data : ",value);
// }
// config(22);
// config();

// function config(value = [2,3,5,3,2]){
//    console.log("this is data : ",value);
// }
// config(33);
// config();
// config(null); // isme null print hoga 
// config(undefined); // isme default parameter hi jayega


/* send function as a default parameter */


function getAge(){
    return 190;
}
function utility(name="pratham",age = getAge()){
    console.log("biodata :", name," ",age);

}
utility("shivam",123)
utility("shivam");
utility();