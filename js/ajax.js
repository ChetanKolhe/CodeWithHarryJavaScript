console.log("This is AJAX tutorial");

function buttonClickHandler(){
    console.log("You have clicked the fetchBtn ");
    
    //instantiate xhr object
    const xhr = new XMLHttpRequest();
    
    // Open the object
    xhr.open("GEt","harry.txt",true)
}
