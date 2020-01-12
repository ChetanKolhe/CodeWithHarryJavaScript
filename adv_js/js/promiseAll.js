console.log("This is Promise All Example");

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Hi this first sentence")
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hi this second promise")
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Hi this third promise")
})

Promise.all([promise1, promise2, promise3]).then(result => console.log(result))





let urls = [
    "https://jsonplaceholder.typicode.com/users"
]

const getdata1 = async function () {
    let allPromise = urls.map(url => fetch(url))

    for await (let request of allPromise){
        const data = await request.json();
        console.log(data);

    }
}

getdata1();