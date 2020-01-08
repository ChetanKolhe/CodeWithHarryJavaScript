console.log("Java Script new operator");

// Spread Operator

const obj = {
    tiger : "chetan",
    deamon: "Pravin",
    hero: "sumer",
    stupid: "Kartik",
}

const {tiger,deamon,...remain} = obj;

console.log(tiger);
console.log(deamon);
console.log(remain);


// Passing multiple value to the function 

function sum(a,b,c,d,e,f,g) {
    return a+b+c+d+e+f+g;   
}

console.log(sum(...[1,2,3,4,5,6,7]))

