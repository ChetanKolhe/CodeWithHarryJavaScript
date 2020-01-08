import {  } from "";

console.log('Reveling module pattern');
const myMath = (function () {
    sum = (a, b) => a + b;
    return {
        sum: sum,
    }
})()

console.log(myMath.sum(1, 3))