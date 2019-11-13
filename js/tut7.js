console.log("This  is tut7.js");

let marks = [12,2,4,5,5,34];
let fruits = ["appe","banana","chiku"];
let mixed = ["str",[1,2,4]];

let arr = new Array(1,2,2,"Orange");

console.log(arr);
console.log(marks);
console.log(mixed);

// Property
console.log(arr.length);
console.log(Array.isArray(arr));

arr[0] = "Harry";
console.log(arr);
console.log(arr.indexOf(343434));
console.log(arr.reverse());
console.log(arr.slice(1,3));
console.log(arr);
console.log(arr);
console.log(arr.splice(1,3,1,2,3,4,5,5));
console.log(arr);


// Object
let myObj = {
    naem: "Harry",
    channale: "CodewithHarry",
    isActive: true,    
    marks:[1,2,4,5,5,5]
}
console.log(myObj.naem);
console.log(myObj["naem"]);
