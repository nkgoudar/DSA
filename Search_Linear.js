/*
    LINEAR SEARCH
    TIME COMPLEXITY: O(n) = n
*/


function linearSearch(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === num) return i;
    }
    return -1;
}


linearSearch([1,2,3,4,5,90,39], 39)

