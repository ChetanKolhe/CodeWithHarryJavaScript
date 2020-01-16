console.log("This is merage sort with shift methdo");
function mergeSort(array){
    // console.log(array)
    if(array.length < 2 ) return array;
    const middle = Math.floor(array.length/2);
    let firstHalf = array.slice(0,middle);
    let secondHalf = array.slice(middle);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}


function merge(array1, array2){
    let result = [];
    while(array1.length && array2.length){
        let minElement ;
        if(array1[0]<array2[0]) minElement = array1.shift();
        else minElement = array2.shift();
        result.push(minElement);
    }

    if(array1.length) result = result.concat(array1);
    else result = result.concat(array2);
    return result;
}



myArray = [23,4,56,3,2,5,23,54,4523,6,234,6723];
console.log(mergeSort(myArray));