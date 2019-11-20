console.log("This is tut18 tutorial ");
let btn = document.getElementById("btn");

// btn.addEventListener("click",func1())    
// btn.addEventListener("dblclick",func2())    
// btn.addEventListener("mousedown",func3())    


// function func1() {
//     return function (e) {
//         console.log("thnaks ");
//         console.log(e);
//         event.preventDefault();
//     };
// }

// function func2() {
//     return function (e) {
//         console.log("thnaks, for double clicking ");
//         console.log(e);
//         event.preventDefault();
//     };
// }

// function func3() {
//     return function (e) {
//         console.log("thnaks, for mousedown event ");
//         console.log(e);
//         event.preventDefault();
//     };
// }


document.querySelector(".container").addEventListener("mousemove",
function(){
    // document.body.style.backgroundPositionX = `rgb(${event.offsetX},${event.offsetY},${event.offsetY}`;
    // document.body.style.backgroundPositionY = `rgb(${event.offsetX},${event.offsetY},${event.offsetY}`;
    document.body.style.background = `rgb(${event.offsetX},${event.offsetY},${event.offsetY}`;
    // document.body.style.lightingColor =`rgb(${event.offsetX},${event.offsetY},${event.offsetY}`;

    console.log("You triggered mousemove e");
    write
})