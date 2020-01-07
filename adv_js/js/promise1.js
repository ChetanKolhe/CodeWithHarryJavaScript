console.log("Promise tutorial");
const promise = new Promise((resolve, reject) => {
    if (true) {
        throw Error;
        resolve("Success");
    } else {
    }
})

console.log(promise);
promise
    .then(result => result + "?")
    .then(result => {
        throw Error;
        console.log(result);
    })
    .catch(erro=>console.log("Error Occur"))
