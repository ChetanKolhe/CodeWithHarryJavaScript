console.log("This is example of deep copy similar to python");
let obj = {a:"a", b:"b", c:"c"};


let clone = Object.assign({},obj)
let clone2 = {...obj};

obj.c = "some Value";

console.log("This is change object");
console.log(obj)
console.log("This is clone object");
console.log(clone);
console.log(clone2);