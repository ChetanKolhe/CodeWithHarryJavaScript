console.log("This is closure problem");

const array = [1, 2, 3, 4, 4]

for (let i = 0; i < array.length; i++) {

    (function(input) {

        setTimeout(() => {
            console.log("I am at index " + array[i]);
        }, 3000);
    }) (i);
}