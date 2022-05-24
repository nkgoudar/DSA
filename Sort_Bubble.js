/*

            -:  BUBBLE SORT   :-

A SORTING ALGORITH WHERE THE LARGEST VALUES BUBBLE UP TO THE TOP

1. START LOOPING FROM WITH A VARIABLE CALLED i IN THE END OF THE ARRAY TOWARDS THE BEGINNING
2. START AN INNER LOOP WITH A VARIABLE CALLED j FROM THE BEGINNING UNTILL i-1
3. IF arr[j] IS GREATER THAN arr[j+1], SWAP THOSE TWO VALES.

O(n^2)

*/

function sortBubble1(arr) {
    let len = arr.length;
    for(let i=len; i>0; i--) {
       for(let j=0; j<i-1; j++) {
           console.log(arr, arr[j], arr[j+1])
           if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
       } 
    }
    return arr;
}

function sortBubble2(arr) {
    const t1 = new Date().getTime();
    let len = arr.length;
    let noSwaps;
    for(let i=len; i>0; i--) {
        noSwaps = true;
       for(let j=0; j<i-1; j++) {
           console.log(arr, arr[j], arr[j+1])
           if(arr[j] > arr[j+1]) {
               [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
               noSwaps = false
           }
       }
       if(noSwaps) break;
    }
    const t2 = new Date().getTime();
    console.log((t2-t1)/1000)
    return arr;
}

// console.log(sortBubble1([2,99,10,91,1,4]));
console.log(sortBubble1([5,4,1,9,2]))
