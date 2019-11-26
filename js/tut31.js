console.log("This prototype inheritance");

const proto = {
    slogan: function () {
        return "This tutoril best";
    }
}



function Employee(name, salary, experiance) {
    this.name = name;
    this.salary = salary;
    this.experiance = experiance;
}

Employee.prototype.slogan = function () {
    retrun`This is best company , Thanks ${this.name}`;
};

//Creating Employe object 
let harry =new Employee("chetan",2000000,3)
console.log(harry);
console.log(Employee.prototype)


//Creating Programer constructor and inherting Employe characterstics.
function Programer(nanem, salary, experiance, role) {
    Employee.call(this,name,salary,experiance);
    this.role = role;
}

// Inherited the prototype 
Programer.prototype = Object.create(Employee.prototype);

// Setting Constructor function manually 
Programer.prototype.constructor = Programer;

let prog =new Programer("chetan",40000000,10,"Programmer");
console.log(prog);


