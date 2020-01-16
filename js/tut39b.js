console.log("This is tut 37 ");

let students = [
    { name: "Chetan", subject: "Python" },
    { name: "Ketan", subject: "Python" }
];

function enrolSturdin(student) {
    return new Promise(function(resolve,reject) {
        setTimeout(function () {
            let error = false;
            if (!error){
                students.push(student);
                console.log("Succefully added into student list");
                resolve()
            }else{
                console.log("Not able to add student");
                reject("It fail to add student")
            }
                
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


let demo = enrolSturdin({ name: "chetan2", subject: "JavaScript" })


demo.then(
    getStudent()).catch(
        function (demo) {
            console.log(demo);
        })


        
 console.log('This message after promise');
 