console.log("This is alarm tutorial");

let alarmSubmit = document.getElementById("alarmButton");

alarmSubmit.addEventListener("click",function(){
    console.log("Set alarm click properly");

    let alarm_date = document.getElementById("alarm_input");
    console.log(alarm_date.innerText);
    console.log(alarm_date.value);

    alarmDate = new Date(alarm_date.value);
    now = new Date()

    timeOut = alarmDate - now;

    if (timeOut >= 0){
        setTimeout(() => {
            console.log("Alarm set ")
        }, timeOut);
    }
    console.log(alarmDate);
    event.preventDefault();
    
})