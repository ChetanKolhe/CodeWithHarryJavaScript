console.log("This is tut 37 ");

let students = [
    { name: "Chetan", subject: "Python" },
    { name: "Ketan", subject: "Python" }
];

function enrolSturdin() {
    return new Promise(function(resolve,reject) {
        setTimeout(function () {
            students.push(student);
            
    
        }, 3000);
    })
}




function getStudent() {
    student_div = document.getElementById("students");
    setTimeout(() => {
        let str = "";
        students.forEach(function (student) {
            // console.log(student);
            console.log(str)
            str += `<li> ${student.name} </li>`;
        });
        document.getElementById("students").innerHTML = str;
    }, 3000);

}


// enrolStudents({ name: "chetan2", subject: "JavaScript" }).then(
//     getStudent()).catch(
//         function (demo) {
//             console.log(demo);
//         })

 