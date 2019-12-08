console.log("This is AJAX tutorial");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetchBtn ");

    //instantiate xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)


    // Requesting useing post method
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true)
    // xhr.setRequestHeader("application/json")
    // xhr.getResponseHeader("content-type","application/json")

    xhr.onprogress = function(){
        console.log("request are processing");
    }

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.onreadystatechange = function(){
        console.log(`Ready state change value ${xhr.readyState}`);
    }

    parm = `{"name":"testsdfasfs1","salary":"123","age":"23"}`;
    xhr.send(parm);
}


let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true)
    let employList = document.getElementById("employes")
    xhr.onload = function(){
        // console.log(this.responseText);
        jsonObj = JSON.parse(this.responseText);
        console.log(jsonObj)
        let str = ""
        for (key in jsonObj){
            str +=`<li>${jsonObj[key].employee_name}</li>`            
        }
        console.log(str)
        employList.innerHTML = str;

    }
    xhr.send()

}