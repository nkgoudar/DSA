/* 

THIS PATTERN INVOLVES CREATING A WINDOW WHICH CAN EITHER BE AN ARRAY OR NUMBER FROM ONE POSITION TO ANOTHER.

DEPENDING ON A CERTAIN CONDITION, THE WINDOW EITHER INCREASES OR CLOSES (AND A NEW WINDOW IS CREATED).

VERY USEFUL FOR KEEPING TRACK OF A SUBSET OF DATA IN AN ARRAY/STRING ETC.

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

WRITE A FUNCTION CALLED "maxSubarraySum" WHICH ACCEPTS AN ARRAY OF INTEGERS AND A NUMBER CALLED n. THE FUNCTION SHOULD
CALCULATE THE MAXIMUM SUM OF "n" CONSECUTIVE ELEMENTS ARRAY.

EXAMPLES:-

INPUT_ARRAY                     INPUT_NUMBER                    RESULT
[1, 2, 5, 2, 8, 1, 5]           2                               10
[1, 2, 5, 2, 8, 1, 5]           4                               17
[4, 2, 1, 6]                    1                               6
[4, 2, 1, 6, 2]                 4                               13
[]                              4                               null

*/

const maxSubarraySum1 = function(arr, n) {
    if(!arr || arr.length === 0) return null;
    let max = null;
    const len = arr.length;
    for(let i = 0; i < len - n + 1; i++) {
        let temp = 0;
        for(let j = 0; j<n; j++) {
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum1([4, 2, 1, 6], 1));
console.log(maxSubarraySum1([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum1([], 4));


console.log("----------------------------------------");

const maxSubarraySum = function (arr, n) {
    let maxSum = null;
    let tempSum = 0;
    const len = arr.length;
    if(len < n) return null;
    for(let i=0; i<n; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for(let i=n; i<len; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        if(tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
