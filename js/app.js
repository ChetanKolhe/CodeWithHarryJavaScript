console.log("Wellecome to magic note app")
showNotes()

//if user add note , add it to the local storage 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addTxt");
    let title = document.getElementById("title");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    note ={
        note:addTxt.value,
        title:title.value
    }

    notesObj.push(note)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    title.value = "";
    showNotes()
})


function showNotes() {
    console.log("Show notes called")
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    html = "";
    notesObj.forEach(function (element, index) {
        html += `          
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.note}</p>
          <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
      </div>
  </div>`;
    })

    let notesEle = document.getElementById("notes")
    if (notesObj.length !=0 ){
        notesEle.innerHTML = html;
    }
    else{
        notesEle.innerText = "Notes not availaible"
    }

};

// delete notes
function deleteNote(id){
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    console.log(id);
    notesObj.splice(id,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById("searchTxt")
search.addEventListener("input",function(){
    console.log(event.target.value);

    let searchVal = event.target.value;
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
                
        let cardtxt = element.getElementsByTagName("p")[0];
        console.log(cardtxt.innerText);
        console.log(searchVal);

        if (cardtxt.innerText.includes(searchVal)){
            element.style.display = "block";    
        }else{
                element.style.display = "none";    
        }
        // if(cardtxt.includes())){
        //     element.style.display = "block";
        // }
        // else{   
        //     element.style.display = "none";
        // }
    })

    
})