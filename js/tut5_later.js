console.log("tut5.js")

// type conversion and type corecion
let myVar = 39;
myVar = String(myVar);
console.log("My variable is " + myVar);
console.log("type of myvar "+ typeof myVar);

let booleanVar = true;
myVar = String(booleanVar);
console.log("My variable is " + myVar);
console.log("type of myvar "+ typeof myVar);

let stri = Number("1234");
stri = Number("123d");
stri = Number(false);
stri = Number([1,2,3,4,5]);
console.log(stri, typeof stri)

//fixing float pointer
let myNumber = 2345.3434;
console.log(myNumber.toFixed(3));
console.log(myNumber.toPrecision(3));

// Type coercion
let mystr = "35";
let mynum = 34;
console.log(mystr + mynum);;
console.log(mynum + mystr);;
