/**
 * Insertion sort : A good algorithm to sort a small number of elements
 */

let arrayToBeSortedAsc = [8,7,4,5,3,6,3,7,9,3,2,8,2];
let arrayToBeSortedDesc = [8,7,4,5,3,6,3,7,9,3,2,8,2];
let insertionSortAsc = (inputArray) => {
    for(let j=1;j<inputArray.length;j++){             //c1  n(length of array)
        key = inputArray[j];                          //c2  n-1
        i=j-1;                                        //c3  n-1
        while(i > -1 && inputArray[i] > key){         //c4  sigma j=2 to n tj
          inputArray[i+1] = inputArray[i];            //c5  sigma j=2 to n-1 tj
          i=i-1;                                      //c6  sigma j=2 to n-1 tj
        }
        inputArray[i+1]=key;                          //c7  n-1
    }
    return inputArray;
}

let insertionSortDesc = (inputArray) => {
    for(let j=1;j<inputArray.length;j++){             //c1  n(length of array)
        key = inputArray[j];                          //c2  n-1
        i=j-1;                                        //c3  n-1
        while(i > -1 && inputArray[i] < key){         //c4  sigma j=2 to n tj
          inputArray[i+1] = inputArray[i];            //c5  sigma j=2 to n-1 tj
          i=i-1;                                      //c6  sigma j=2 to n-1 tj
        }
        inputArray[i+1]=key;                          //c7  n-1
    }
    return inputArray;
}

console.log('Sorted By Insertion sort:',insertionSortAsc(arrayToBeSortedAsc),insertionSortDesc(arrayToBeSortedDesc));

/**
 * The merge sort algorithm closely follows the divide-and-conquer paradigm
 calculating the max Array
 */
function test1(A,low,mid,high){

var left_sum = -10000000;
var sum =0;
for(let i=mid;i>=0;i--)
{
sum = sum + A[i];
if (sum > left_sum){
left_sum = sum;
var max_left = i;
}
};
console.log(left_sum);
var right_sum = -10000000;
sum =0 ;
 for(let j=mid+1;j<high;j++)
 {
 sum = sum + A[j];
 if (sum > right_sum){
 right_sum = sum;
 var max_right = j;
 }
 };
 console.log (max_left, max_right, left_sum +right_sum);
 };
 
 test1([2,-30,4,5,6],0,2,5);