console.log("Job Queue Example");

setTimeout(()=>console.log("1"),0)
setTimeout(()=>console.log("2"),10000)
Promise.resolve("3 Resolve").then(data => console.log(data));