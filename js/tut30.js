
const proto = {
    slogan: function(){
        return "This is my slogaan";

    },

    changeName: function(newName){
        this.name = newName;
    }
}



harry = Object.create(proto);
harry.name = "Harry"
console.log(harry);

harry.changeName("Chetan");
console.log(harry);


// another way to create object 
harry2 = Object.create(proto,{
    name:{value:"Chetan"}
})

console.log(harry2)