console.log("this is tut27.js tutorial");

let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function () {
        console.log("Car is running");

    }
}

console.log(car);


// Constructor 
// we already seen constructor 
// new Date()


// Creating generalcar constructor

function GenerateCar(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.run = function () {
        console.log(`${this.name} car running`);
    }

    this.analyze = function () {
        console.log(`This car slower than ${200 - this.topSpeed} by Mercedes `);
    }
}


let car1 = new GenerateCar("nissan", 180);
let car2 = new GenerateCar("Maruti", 180);

console.log(car1);
console.log(car1.__proto__);


// console.log(GenerateCar);