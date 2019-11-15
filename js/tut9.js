console.log("tut9.js");
// General Loops : for , while , do-while 

for (let index = 0; index < 100; index++) {
    console.log(index);    
    index +=1;
    index++;
    

}


// using while loop
let j = 0;
while(j<100){
    console.log(j)
    j++;
}


arr = [1,2,3,4,5];

arr.forEach(element => {
    console.log(element)
});



console.log("Using for loop with function ");
arr.forEach(function(element){
    console.log(element);
})



// using object with for loop

obje = {
    a :123,
    b: 234,
    c: 34,
    d:34
}


console.log("Printing key using for loop")
for(let key in obje){
    console.log(key);
}


// We can pass three argument to function using foreach

arr.forEach(function(a,b,c){
    console.log(a,b,c);
})


