/*

SIMILAR TO BUBBLE SORT, BUT INSTEAD OF FIRST PLACING LARGE VALUES INTO SORTED POSITION, IT PLACES SMALL VALUES INTO
SORTED POSITION.

1. STORE THE FIRST ELEMENT AS THE SMALLEST VALUE YOU HAVE SEEN SO FAR
2. COMPARE THIS ITEM TO THE NEXT ITEM IN THE ARRAY UNTIL YOU FINA A SMALLER NUMBER\
3. IF A SMALLER NUMBER IS FOUND, DESIGNATE THAT SMALLER NUMBER TO BE THE NEW MINIMUM AND CONTINUE UNTILL END OF THE ARRAY
4. IF THE MINIMUM IS NOT THE VALUE(INDEX) YOU INITIALLY BEGAN WITH, SWAP THE TWO VALUES
5. REPEAT THIS WITH NEXT ELEMENT UNTIL THE ARRAY IS SORTED

O(n^2)

*/


const selectionSort = function (arr) {
    const len = arr.length;
    let minIndex;
    for(let i=0; i<len; i++) {
        minIndex = i;
        for(let j=i+1; j<len; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(i !== minIndex) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

selectionSort([0, 0,2,90,0,21,Infinity, 4, 5, -Infinity, NaN]);
