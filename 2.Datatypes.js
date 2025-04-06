"srtict mode" // it means it will use the newer versions.

//alert("hello") // we are using node js not in browser 

//primitive datatypes 

/*
1. numbers --
2. string --
3. boolean --
4. bigInt --
5. null --
6. symbols --
7. undefined --
*/

//non-primitive datatypes
// 1. object
// 2. array
// 3. function

let age = 23
let name = "Priyadarshi"
let isFollow = true

console.log(age, name, isFollow);
console.table([age,name,isFollow]);

// bigInt
let xy = 12341n
console.log(xy);
console.log(typeof (xy));

//symbol
let symbol = Symbol("qwertyuio")
console.log(symbol);
console.log(typeof(symbol));

//null
let x = null //empty
console.log(x); //null
console.log(typeof x); //null--object

// null is a reference of object

//undefined
let y;
console.log(y); //undefined
console.log(typeof y); //undefined