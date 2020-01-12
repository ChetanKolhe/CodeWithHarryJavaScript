console.log("This is tutorial 51");
const myArry = ["Apple", "Bhendi", "Kadu", "LadyFinger", "Onion"];

function myIterator(value) {
    let nextIndex = 0;
    return {
        next:  () => {
            console.log(value.length)
            console.log(nextIndex)
            console.log(nextIndex > value.length)
            if (value.length > nextIndex) {                
                return {
                    value: value[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }

    }
}

demo = myIterator(myArry);
console.log(demo.next())
console.log(demo.next().value)
console.log(demo.next().value)
console.log(demo.next().value)
console.log(demo.next().value)
console.log(demo.next().value)
console.log(demo.next().value)


// This is example of for loop
for (const value of myArry) {
    console.log(value);
}

// This is example of another for loop
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
}

