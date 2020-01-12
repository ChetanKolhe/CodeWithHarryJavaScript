console.log("This is tutorial about Generator");

function* generator(){
    yield 1;
    yield 2;
    yield 3;

}

myGen = generator()

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);



