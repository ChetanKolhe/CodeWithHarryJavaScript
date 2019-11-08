console.log("tut3.js")
//variable in js
//let const var

var name = `chetan`
console.log(name)

// Rules in variable 
// 1 Cannot start with number .
// 2 Can start with letter , number , _ , $
// Case Senesitiv

var city = "Delhi"


const ownerName = `Harry Ram`;
console.log(ownerName);

//It will give the error when we try to override constant variable
// ownerName = `demo`;


//Block scope
{
    let city = "Pune";
    console.log(city);
}


//Using var in Block scope
{
    var city = "Nagpur";
    var city = "Nagpur";
    console.log(city);
}

var city = "tgus bew "
console.log(city)

    /*
Most Common Programing Cases

1. camelCase  (javascript,java,..)
2. kabab-case
3. snake_case (Python , shell script)
4. PascalCase

*/




/*
Data types
1. Primitive DataType (stack)
    string ("demo")
    number, (34, 57.6)
    boolean
    null
    Undefined
    Symbol

2. Reference DataTypes  (heap)
    Array
    Object literal
    Functon
    Dates

*/