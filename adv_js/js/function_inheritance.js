console.log("This is funcion inheritance");

function Person(name) {
    this.name = name;
    this.print_name = function(){
        console.log(`${this.name}`);
    }
}

Person.prototype.slogan = function () {
    return `this is my name ${this.name}`;
}


function Empolye(name, sal){
    Person.call(this,name)
    this.sal = sal
    this.print_sal = function(){
        console.log(`${this.sal}`);
    }
}



Empolye.prototype = Object.create(Person.prototype)
Empolye.prototype.constructor = Empolye

// Empolye.__proto__ = Person;
demo =new Empolye("Chetan","1cr");
demo.print_name();
console.log(demo)
console.log(demo.slogan())




