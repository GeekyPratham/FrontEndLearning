//  console.log("this is my environment");

// Operators and conditionals in javascript
 
/*
 operators  -> operations


 1) binary operators
  '+'       -> addition
  '-'       -> subtraction
  '*'       -> multiplication
  '/'       -> diviosion
  '%'       -> modulo
  '**;      -> power
  eg :-> 3+4 = 7,3*4 =12 , 2**4= 16, 5%2 = 1 etc


  2) urinary operators
   
  ++a -> a increase by 1 = first increase the n print
  --a -> a decrease by 1
  a++ = first print then increase
  b--
  3) assignment operator -> '=';
  which is used to assign the value to the variable

  4) comparison operatiors
  
  >,<,==,>=,<=,===,!=,!== 

  '==' ->( it comes under loose) dono same hone chaiye type of data se koi matlab nhi hai
  eg--  let a = 5, let b= "5"
  console.log(a==b)// it gives true

  '===' ->(it is also called strict) dono same hone chaiye aur dono ka type of data bhi same hona chaiye
  eg-> dono string/int /bool hone chaiye aur dono string/int /bool ja value bhi same hone chaiye


  its answer will be either true or false
  

  5) ternary operator
  syntax:->
  condition ? val2 : val2;

  6) logical operator

  && , || , ! 
  and, or , not

  (true && true) -> true
  (true && false) -> false
  (true || true) -> true
  (true || false) -> true
  (false || false) -> false

  --> woking with NON-booleans
  
  (false && "pratham")
  (false || 2)
  (true || "raj")

  -> falsey = undefined,null,0,false,NaN," "->empty
  -> turthy = anything which is not falsey





*/
// let a = 5;
// let b= "5";
//   console.log(a==b)

// console.log(true || 'pratham')
// console.log(true || "")
//  console.log(false || "")
//  console.log(false || "pratham")
// console.log(false && "")
// console.log(false && "pratham")
// console.log(false || false)
// console.log("" || false)


/* 
 Bitwise Operators
  -> and,or,not,xor,leftshift,rightshift
  -> &  ,| ,~  ,^,  >>       , <<

  and bit -> jab dono bit 1 hoga tohi 1 aayega nahi to 0 hoga

  or -> jab dono bit 0 hoga tabhi 0 hoga nahi toh 1 hoga

  xor -> jab dono same tabhi 0 nahi toh 1 hoga

  not -> 0 ka 1 aur 1 ka 0 deta hai




*/
/*
console.log(2 & 4);//->0

// 00000000...000010
// 00000000...000100
//&
// 00000000...000000 ->0
console.log(2 & 5);//->0
// 00000000...000010
// 00000000...000101
//&
// 00000000...000000 ->0
console.log(2 & 3);//->2
// 00000000...000010
// 00000000...000011
//&
// 00000000...000010 ->2
*/

// console.log( 2 | 5);

// console.log(~(0));
// 00000...000
//~
// 11111...111
// it is negative so takes its 2's complement
//2's complement = 1's complement +1
// 1's complement-> flip all if 0 make it 1 or if 1 make it 0
//  00000...000
//           +1
//  00000...001 -> it value is 1 and initially it is negative so put -(minus) sign

// the left most os most significant bit so if 1 then it is negative else if it is 0 then it is positive

// console.log(2^2);
// console.log(2^3);

/* 
  leftShift karne se no 2^n se multiply ho jata hai

  5<<1 -> 1 se left shift
  //  00000... 000101
  // 00000...0000101_
  bacha hua place me 0 bhar do toh

  // 00000...0001010 -> 10 ka binary hai
  
  5<<1 = 5*(2^1);=10
  5<<4 = 5*(2^4);=80

*/
/* 
  right shift karne se no 2^n se divide ho jata hai

  10>>1 -> 1 se right shift
  //  00000... 0001010
  // 000000....0000101_ last wala lost ho jayega
  aur 0000...00101 -> 5 ka binary hai

  
  10>>1 = 10/(2^1);=5
  10>>4 = 160/(2^4);=10

*/

// console.log(160>>4);

/* conditionals statements

if else
switch case

1) syntax of if else

if(cond){

}
else if(codition){

}
else{

}


2) syntax of switc case

switch(expression){
  case_ : logic kuch kam ya pint
  break;
  case_ : logic
  break;
  case_ : logic
  break;
  default : logic
}

*/