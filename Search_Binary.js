/*

BINARY SEARCH IS A MUCH FASTER FORM OF SEARCH
RATHER THAN ELIMINATING ONE ELEMENT AT A TIME, YOU CAN ELIMINATE HALF OF THE REMAINING ELEMENTS AT A TIME
BINARY SEARCH ONLY WORKS ON SORTED ARRAYS

               [ DIVIDE AND CONQUER METHOD ]

*/

function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        const middle = Math.floor((left + right) / 2);
        if(arr[middle] === num) return middle;
        else if(arr[middle] < num) left = middle + 1;
        else right = middle - 1;
    }

    return -1;
}

binarySearch([1,2,3,4,5,6,7,8,9,89,99,999], 909)
