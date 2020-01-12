console.log("This tutorial on compose pattern");
const compose = (f,g) =>(num) => f(g(num));
const multilyByTwo = (num) => num * 2;
const absolute_val = Math.abs
let modify = compose(multilyByTwo,absolute_val)
console.log(modify(-35))