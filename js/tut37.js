console.log("This is tut 37 ");

let students = [
    { name: "Chetan", subject: "Python" },
    { name: "Ketan", subject: "Python" }
];

function enrolStudents(student, callback) {
    setTimeout(function () {
        students.push(student);
        callback();

    }, 3000);
}


function getStudent() {
    student_div = document.getElementById("students");
    setTimeout(function(){
        let str = "";
        students.forEach(function (student) {
            // console.log(student);
            console.log(str)
            str += `<li> ${student.name} </li>`;
        });
        document.getElementById("students").innerHTML = str;
    }, 3000);

}

enrolStudents({name:"chetan2",subject:"JavaScript"},getStudent);