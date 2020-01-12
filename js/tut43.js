// console.log("This is tutorial of async and await ")
// async : it return promise.
// await : it wait for promise to be complete.

async function harry() {
    console.log("Inside functin");
    const response = await fetch("https://api.github.com/users");
    console.log(response);
    console.log("This is message after first await");
    let data = await response.json();
    console.log("This is message after second await");
    return data
}

let a = harry();
a.then(data => console.log(data));
console.log("This after promise message");