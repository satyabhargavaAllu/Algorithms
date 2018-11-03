/**
 * Insertion sort : A good algorithm to sort a small number of elements
 */

let arrayToBeSorted = [8,7,4,5,3,6,3,7,9,3,2,8,2];
let insertionSort = (inputArray) => {
    for(let j=1;j<inputArray.length;j++){
        key = inputArray[j];
        i=j-1;
        while(i > -1 && inputArray[i] > key){
          inputArray[i+1] = inputArray[i];
          i=i-1;
          inputArray[i+1]=key;
        }
    }
    return inputArray;
}

console.log('Sorted By Insertion sort:',insertionSort(arrayToBeSorted));