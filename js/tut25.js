console.log("This it tut25");
let divElem = document.createElement("div");
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
console.log(divElem, container, first);

divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute("style", "border:2px solid black; width:154px; margin: 34px; padding:23px;");

let text
val = localStorage.getItem("val");
if (val == null){
     text = document.createTextNode("This is text node ");
    
}else{
     text = document.createTextNode(val);
}

divElem.appendChild(text);

container.insertBefore(divElem, first);

divElem.addEventListener("click", function () {
    // html = `    <textarea class="form-control" id="textarea" rows="3"></textarea>`;
    html = elem.innerHTML;
    noTextArea = document.getElementsByClassName("textarea").length;
    if (noTextArea == 0) {
        divElem.innerHTML = `    <textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;
    }

    let texarea = document.getElementById("textarea");
    texarea.addEventListener("blur",function(){
        elem.innerHTML = texarea.value;
        localStorage.setItem("val",texarea.value);
    })
})
