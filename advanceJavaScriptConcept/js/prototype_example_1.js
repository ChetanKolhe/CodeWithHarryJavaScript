console.log("This example of prototype ");
console.log("This new syntax");
let dragon = {
    name: "Tanya",
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        if (this.fire) {
            return `This is dragon ${this.name}`;
        } else {
            return `This is normal dragon`;
        }
    }

};
let lizard = {
    name: "Kiki",
    fight() {
        return 1;
    }
};


Object.setPrototypeOf(lizard, dragon);
console.log(lizard.sing());

