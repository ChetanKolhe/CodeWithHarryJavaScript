console.log("This is arrow function tutorial");

//Arrow function tutorial

// Normal function
const chetan = function(){
    console.log("This is Normal function");
}

// Arrow function 
/*
const chetan = () => {
    console.log("This is arrwow fuction");
}

*/
chetan()


// one linear arrow function don't required braces

let greet = () => "Good morning";
console.log(greet());

// while returning object in one linear arrow function it shoudl be mention in braces ()
greet = () => ({name:"Chetan"});
console.log(greet());

// Single argument don't required 
greet = name => "Good morning " + name ;
console.log(greet("chetan"));




