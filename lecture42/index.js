//      Loops and Strings

/* 
   basic types of loops in javascript
   
   1-> for loop
   2-> while loop
   3-> do while  loop

   we will study this loops after array
   4-> for in loop
   5-> for each loop
   6-> for of loop

   1-> syntax for for loop

   for(initialisation; condition : updatation){

   }

   2 -> syntax of while loop

   while(condition){
      what you want to do happen
      updatation
   }

   3-> syntax of do while loop

   let i=1
   do{

      ___
      ___
      ___logic

      updatation
   }while(condition);

   do while loop me first iteration guarenteed hoti hai kyoki aap koi condition check nahi karte hai phele hi print karte hai

*/
/*
for(var i=0 ; i<10;i++){
   console.log("pratham raj");
}
*/

// for(let i = 0;i<=4;i++){
//    // if(i==4) break;
//    console.log("pratham");
// }

/* 
      strings := sequence of character


*/

// let firstName = "pratham"
// let secondName = "raj"

// console.log(firstName);
// console.log(secondName);

// let name = "pratham raj";
// console.log(name);

// let name = "pratham 
// raj";
// console.log(name);

// let name = `pratham raj`;
// console.log(name);

// let name = `pratham 
// raj`;
// console.log(name);

// let name = `pratham 
// raj
//  lives 
//  in 
//  purnea`;
//  console.log(name);

// let name = 'pratham raj';
// console.log(name);
// console.log(typeof(name));
// let secondname=`pratham 
// raj
// lives 
// in 
// kolkata`;
// console.log(secondname);

/*
let firstName = new String("Pratham Raj");
 console.log(firstName);

 console.log(typeof(firstName));
 firstName = " shivam";
 console.log(firstName);
 console.log(firstName.length)

 firstName.customProperty = "example";
 console.log(firstName.customProperty);

let myName = "pratham raj";
 console.log(myName);
myName = "shivam";
 console.log(myName);
console.log(myName.length);
myName.custome = "raj";
console.log(myName.custom);

let nameObject = new String("pratham raj");
nameObject.customProperty = "example";
console.log(nameObject.customProperty); // Expected output: "example"

*/

/*
   operations on string'

   1-> concatenation
   2-> substring
   3-> length
   4-> convert in upper case 
   5-> convert in lower case
   6-> split and join the string
   7-> find specific character
   8-> index of character


*/

let op1 = 'enGlish ';
let op2 = 'hinDi';


// let ans = op1 + op2;
// console.log(ans);
// console.log(typeof(ans));

// let finalAns = `op1 + op2`;
// console.log(finalAns);  -> o/p = op1 + op2

// let finalAns = `${op1} + ${op2}`;
// console.log(finalAns);  -> o/p = english  + hindi ('+' sign present)

// let finalAns = `${op1}${op2}`;
// console.log(finalAns); //output = english hindi

// console.log(op1.length);
// console.log(op2.toUpperCase());
// console.log(op1.toLocaleLowerCase());

// let str = "pratham raj";
// console.log(str.substring(2));
// console.log(str.substring(2,6));// ending index is exclusive
// console.log(str.substring(2,1));
// console.log(str.substring(0));

// let sentence = "hello jee kaise hai aaplog";
// let words = sentence.split(' ');
// console.log(words);
// // // spaces se split kar do
//  console.log(words.join(','));


// let sentence = "hello# #jee# #kaise# #hai# #aap# #log";
// let words = sentence.split('#');
// console.log(words);

// console.log(words.join(','));

// let sentence = "hello jee \"kaise\" hai aaplog";
// console.log(sentence);
//  let words = sentence.split(' ');
// console.log(words);

