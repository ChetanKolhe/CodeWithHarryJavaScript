console.log("This is example for call , apply and bind");

let wizard = {
    name: "marlin",
    health: 30,
    heal() {
        const newLocal = this.health = 100;
        return newLocal ;
    }
};

archer = {
    name: "Robin Hood",
    health: 30,
};

// console.log(wizard.health);
// console.log(wizard.heal());
console.log(archer);
console.log(wizard.heal.call(archer));
console.log(archer);