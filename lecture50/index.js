/* error handling in java script */

// an event which disturbed the normal flow of execution of program is called error

// types of error:-> 1) compile time  2) runtime

/*  compile time error */

// syntax error
// console.log(1;

/* runtime error */
// reference error 
// console.log(x); // as x is not defined how can you print

/* error handling */
// we use try catch block


// finally block  -> it will run every time

/** 
try{ // try block ka ander wah wala code likho jisme error aane ki sambhavana ho

    console.log("try block starts here");
    console.log(x);// error hoga kyoki x define nahi hai toh iske niche wala code execute nahi hoga
    console.log("try block ends here");

    //a

    //b

    //c

}
catch(err){ // err is name of error
    // define error ka sath aap kay karna chate hai
    // retry logic
    /// fallback mechanism
    //logging
    //custome error

    console.log("I am inside Catch Block");
    console.log("your error is here : ", err);
}
finally{
    console.log("I will run every time as i am final block ")
}

*/

//* we can create custome error throgh "throw" keyword */

// try{
// //reference error
//     console.log(x);

// }
// catch(err){
//     throw new Error("Bhai phele decleare kardo fir print karna");
// }

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON");
}