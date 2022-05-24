/*

1. LIKE MERGE SORT, EXPLOITS THE FACT THAT ARRAYS OF 0 OR 1 ELEMENTS ARE ALWAYS SORTED.
2. WORKS BY SELECTING ONE ELEMENT (CALLED "pivot") AND FINDING THE INDEX WHERE THE PIVOT SHOULD END UP IN THE SORTED ARRAY.
3. ONCE THE PIVOT IS POSITIONED APPROPRIATELY, QUICK SORT CAN BE APPLIED ON EITHER SIDE OF THE PIVOT.


                    -:      :-

HELPER FUNCTION ::::::::::------:::::::::::
1. In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array
   on either side of a pivot.
2. Given an array, this helper function should designate an element as pivot
3. It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the
   pivot, and all values greater than the pivot are moved to the right of the pivot.
4. The order of elements on either side of the pivot doesn't matter!

PICKING A PIVOT  :::::::::::-------::::::::
1. The runtime of quick sort depends in part on how one selects the pivot.
2. Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
3. For simplicity, we'll always choose the pivot to be the first element (THERE ARE CONSEQUENCES BY DOING THIS).

QUICK SORT  :::::--------::::::::
1. Call the pivot helper on the array
2. When the pivot returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of 
   that index, and the subarray to the right of that index.

*/

const pivot = (arr, start=0, end=arr.length-1) => {
    let swapIndex = start;
    const pivot = arr[start];
    const len = arr.length;
    for(let i=start+1; i<len; i++) {
        if(arr[i] < pivot) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
};

const quickSort = (arr, left=0, right=arr.length-1) => {
    if(left < right){
        const pivIndex = pivot(arr, left, right);
        quickSort(arr,left, pivIndex-1);
        quickSort(arr, pivIndex+1, right);
    }
    return arr;
};

quickSort([8,2,3,1,10,12,4,11]);
