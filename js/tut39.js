console.log("This is Promis tutorial");

function func1(){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            const error = true;
            if (!error){
                console.log("This message from resolve");
                resolve()                
            }else{
                console.log("This is message from reject ");
                reject("sorry i am not able to fullfil your request");
            }
        }, 300);

    })
}


func1().then(function resovle() {
    console.log("Your promise has been successfuly resolved");    
}).catch(function(message_from_reject) {
    console.log(message_from_reject);
})