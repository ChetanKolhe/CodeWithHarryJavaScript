console.log("This is error handling example");
function fail() {
    try {
        // consol.log("In Fail")
        // throw new Error("OOPS ");
        setTimeout(() => {
            throw new Error("This is issue")
        }, 5000);
    } catch (error) {
        console.log("We have catch the error")
        console.log(error)
    }
}

fail()


// silent fail

Promise.resolve("asynFail")
    .then(result => {
        console.log(result);
        throw new Error(`This is silent error which is not handle by browser 
    but handle by node`)
        return result
    })
    .then(result => console.log(result))
    .catch(erro => {
        console.log(erro)
        return erro
    })
    .then(result => result)



// Handling error using async and await

(async function () {
    try {
        await Promise.reject("This is error")
    } catch (error) {
        console.log(error);
    }
})()



// Custom Error 
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationError";
        this.snack = "PaniPuri";
    }
}
throw new AuthenticationError("This my Error")