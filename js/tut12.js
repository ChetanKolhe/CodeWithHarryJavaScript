console.log("This is tut12.js tutorial");
let a = document;

// It show all collection html tag.
// It is not array
// a = document.all;

// It show the body for dom
// a = document.body;

// showing all forms elmenet
// a = document.forms


// using forEach with html tag collection
a = document.all;
Array.from(a).forEach(function(element,index){
    console.log(index)
    console.log(element)
})

a = document.links;
console.log(a)



a = document.scripts;
console.log(a)


