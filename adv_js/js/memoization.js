console.log("This is tutorial on memoization")

/* console.log("Simple Add function")
function addTo80(num){
    console.log("Loading");
    return num + 80;
}

console.log(addTo80(49));
console.log(addTo80(49));
console.log(addTo80(49)); */


/* console.log("Use global variable to store the cache information")
const cache = {};
function memoizeAddto80(num){
    if(num in cache){
        return cache[num]     
    }else{
        console.log("Loading")
        cache[num] = num + 80;
        return num + 80
    }
}
console.log(memoizeAddto80(49));
console.log(memoizeAddto80(49));
console.log(memoizeAddto80(49)); */


console.log("Useing closure to store cache variable to store information")

function memoizeAddto80(){
    const cache = {};
    return function(num){
        if(num in cache){
            return cache[num]     
        }else{
            console.log("Loading")
            cache[num] = num + 80;
            return num + 80
        }
    }

}

let memoization = memoizeAddto80();
console.log(memoization);
console.log(memoization(49));
console.log(memoization(49));
console.log(memoization(49));
console.log(eval(memoization.cache))