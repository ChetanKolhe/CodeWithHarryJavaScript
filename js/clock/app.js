console.log("This is time example");
function updateClock() {
    
    let clock = document.getElementById("clock");    
    let date  = new Date();
    clock.innerHTML = date;
    console.log(date);
    

}