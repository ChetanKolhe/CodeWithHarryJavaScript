console.log("This is tutorial on bind and currying");
console.log("bind function return new function which bind with this");

function multiply(a, b) {
    return a * b;
}

console.log(multiply(1, 4));
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));


function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b)
        };
    };
}

function add(a, b) {
    return a + b;
}


let curriedSum = curry(add);
console.log(curriedSum)

console.log("Double curry");
let doubleCurry =  curry(curriedSum)
console.log(doubleCurry)
console.log(doubleCurry(5))
console.log(doubleCurry(5)(20))


console.log(doubleCurry(5)(20)(8))


console.log(curriedSum(2)(2))

// console.log(curry(sum)(1)(5))
