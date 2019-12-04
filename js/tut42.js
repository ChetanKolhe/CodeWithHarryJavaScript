console.log("This is fetch api tutorial");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content")

function getData(){
    url = "js/harry.txt";
    url = "https://api.github.com/users";
    return fetch(url).then((response) =>{
        return response.json();
    }).then(data => {
        console.log(data);
    },error => console.log(error))
}




function postData(){
    let url = "http://dummy.restapiexample.com/api/v1/create";
    data = `{"name":"testsdhfdhdg","salary":"123","age":"23"}`;

    let param = {
        body:data,
        header:{"content-type":"application/json"},
        method:"post",
    }

    return fetch(url,param).then(response => {
        console.log(response.status);
        return response.json();}).
    then(data =>console.log(data),error => console.log(error))
}

getData();
postData();