console.log("This is tutorial about for..in and for..of loop");
a = ["Harry","Chetan","Demo"];

/* 
// Traditional for loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)    
} */

obj ={
    name:"Chetan",
    demo:"dmeo"
}


for (const key in obj) {
    console.log(obj[key]);
}


String.prototype.demo = {}

myString = "This my string";
for (const char in myString) {
    console.log(char);
    // const element = myString[char];
    // console.log(element);
    // some some soem s234     
}