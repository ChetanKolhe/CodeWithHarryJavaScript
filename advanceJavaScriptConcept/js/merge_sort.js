console.log("This is merage sort with shift methdo");
function mergeSort(array){
    // console.log(array)
    if(array.length < 2 ) return array;
    const middle = Math.floor(array.length/2);
    let firstHalf = array.slice(0,middle);
    let secondHalf = array.slice(middle);

    return merge2(mergeSort(firstHalf), mergeSort(secondHalf));
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




function merge2(array1, array2){  
    let result  = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    if (array1.length === 0) return array2;
    if (array2.length === 0) return array1;

    while (array2Item || array2Item) {
        if(!array2Item || array1Item < array2Item){
            result.push(array1Item);
            array1Item = array1[i];
            i++;            
        }else{
            result.push(array2Item);
            array2Item = array2[j];
            j++;
        }                
    }

    return result;    
}


myArray = [23,4,56,3,2,5,23,54,4523,6,234,6723];
console.log(mergeSort(myArray));
console.log(merge2([3,4],[5,4]))