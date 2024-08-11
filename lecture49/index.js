/* object cloning */

const { hasIn } = require("lodash")

// object is dyanmic because object ki property ko ham run time par change kar sakte hai

/** 
let obj = {
    age:12,
    wt:34,
    ht:123,
};

console.log(obj);

obj.color = "white";
console.log(obj);

*/

/**
 * 
 * three ways to object cloning
 * 1-> spread operator -- (...)
 * 2-> assign method -- object.assign({},src);
 * 3-> iteration method
 * 
 */

// first method

/*
let src = {
    age:12,
    wt:34,
    ht:123,
};

console.log(src);

let dest = {...src};



console.log(src);
console.log(dest);
dest.color = "red";
src.color = "yellow";
src.age = 19;
console.log(src);
console.log(dest);
*/

/*
let src = {
    age:12,
    wt:34,
    ht:123,
};

console.log(src);
src.age = 39;
let dest = Object.assign({},src);
console.log(dest);

* */

/** 

let src = {
    age:12,
    wt:34,
    ht:123,
};

let src2 = {

    value: 33,
    fname: "pratham",
};

console.log(src);
src.age = 39;
let dest = Object.assign({},src,src2);
console.log(dest);

*/

/** 
let src = {
    age:12,
    wt:34,
    ht:123,
};

let dest = {};

// object par loop lagana kar clone karege
for(let key in src){
    // console.log(key);
    let newKey = key;
    let newKeyValue = src[key];
    // insert newKey value in the dest and create clone

    dest[newKey] = newKeyValue;
}
src.age = 90;
console.log(src);
console.log(dest);

*/


/* garbage collector */

// in c/c++ 
// new ka use kareke memory assign karete hasIn
// or deallocate manually karte hai free ka use karke.assign

// but in javascrip me garbage collector tool ka use karte hai 

/*
    garbage collector -> in a program some memory allocated but it is no longer in use can be freed by tool called garbage collector to avoid data leakage or increase performance of code/program

    -> no control manually 
    -> always run in background
*/