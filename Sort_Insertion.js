/*

BUILDS UP THE SORT BY GRADUALLY CREATING A LARGER LEFT HALF WHICH IS ALWAYS SORTED

1. START BY PICKING THE SECOND ELEMENT IN THE ARRAY
2. NOW COMPARE THE SECONF ELEMENT WITH THE ONE BEFORE IT AND SWAP IF NECESSARY
3. CONTINUE TO THE NEXT ELEMENT AND IF IT IS IN THE INCORRECT ORDER, ITERATE THROUGH THE SORTED PORTION(i.e. THE LEFT SIDE)
    TO PLACE THE ELEMENT IN THE CORRECT PLACE
4. REPEAT UNTIL THE ARRAY IS SORTED.

*/

const insertionSort = function(arr) {
    const len = arr.length;
    for (let i=1; i<len; i++){
    let curr = arr[i];
        for(var j=i-1; j>=0 && arr[j] > curr; j--) {
            arr[j+1] = arr[j];
           
        }
         arr[j+1] = curr
             console.log(arr)
    }
    return arr;
}

// insertionSort([1,23,12,8,4,9]);


const insertionSort2 = function(arr) { // O(n)
    const len = arr.length;
    for(let i=1; i<len; i++) {
        let curr = arr[i], j=i-1;
        while(j>-1 && curr<arr[j]) {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = curr;
    }
    return arr;
}

console.log(insertionSort2([1,89,90,9.9,8,9]));
