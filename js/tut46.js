console.log('this is tutorial about Regular expression');

let  reg = /Chetan/ig
let s = "This is gread code which is written by Chetan,chetan"

console.log(s)         

let result = reg.exec(s)
// console.log(result);
console.log(result.index);

result.forEach(element => {
    console.log(element);
    console.log(typeof(element));
});

// console.log(result)

// result = reg.exec(s)
// console.log(result)

// How to use matches 
result = s.match(reg);
console.log(result);
