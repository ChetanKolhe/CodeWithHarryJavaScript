console.log("This is example using normal inheritance");

class Person{
    constructor(name){
        this.name = name
    }

    print_name(){
        console.log(`${this.name}`);
    }
}


class Employe extends Person{
    constructor(name,sal){
        super(name);
        this.sal = sal;
    }

    print_sal(){
        console.log(`${this.sal}`);
    }
}


class EmployeDep extends Employe{
    constructor(name,sal,dep){
        super(name);
        this.sal = sal;
        this.dep = dep
    }

    print_dep(){
        console.log(`${this.dep}`);
    }
}

let emp = new EmployeDep("chetan","1cr","Technical Staff");
emp.print_sal();
emp.print_name();
console.log(emp)
console.log(emp.__proto__);
// console.log(Employe);
console.log(Employe.prototype);
console.log(EmployeDep.prototype);