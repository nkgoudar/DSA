/*

THIS PATTERN INVOLVES DIVIDING A DATA SET INTO SMALLER CHUNKS AND THEN REPEATING A PROCESS WITH A SUBSET OF DATA.

THIS PATTERN CAN TREMENDOUSLY DECREASE TIME COMPLEXITY.

*/


/*

GIVEN A SORTED ARRAY OF INTEGERS, WRITE A FUNCTION CALLED SEARCH, THAT ACCEPTS A VALUE AND RETURNS THE INDEX WHERE THE
VALUE PASSED TO THE FUNCTION IS LOCATED. IF THE VALUE IS NOT FOUND, RETURN -1

Examples:-

INPUT_ARRAY                 INPUT_NUMBER                   RESULT
[1,2,3,4,5,6]               4                              3
[1,2,3,4,5,6]               6                              6
[1,2,3,4,5,6]               11                             -1

*/


const search1 = function(arr, n) {
    const len = arr.length;
    for(let i=0; i<len; i++) {
        if(arr[i] === n) return i+1;
    }
    return -1;
}

console.log(search1([1,2,3,4,5,6], 4));
console.log(search1([1,2,3,4,5,6], 6));
console.log(search1([1,2,3,4,5,6], 11));

console.log("======================")

const search = function (arr, n) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if(arr[middle] < n) min = middle + 1;
        else if(arr[middle] > n) max = middle - 1;
        else return middle + 1;
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4));
console.log(search([1,2,3,4,5,6], 6));
console.log(search([1,2,3,4,5,6], 11));
