console.log("This is tutorial on map function ");

let myMap = new Map();

myMap.set("key1","this is value ");
myMap.set({},"This is blank");
myMap.set({},"This is duplicate");

console.log(myMap);
console.log(myMap.get({}));


// Array Example 
console.log(Array.from(myMap));

// Array Value Example
console.log(Array.from(myMap.values()));


// Array Value Example
console.log(Array.from(myMap.keys()));


// How to check key is present in map
console.log(myMap.has("key"))


for ( const [key,value] of myMap) {
    console.log(key);
    console.log(value);
}


// Assigning multipl values

