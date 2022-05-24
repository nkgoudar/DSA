// Merge two arrays


const merge = (arr1, arr2) => {
    console.log(arr1, arr2);
    let res = [];
    let i=j=0;
    let len1 = arr1.length, len2 = arr2.length;
    while(i<len1 && j<len2) {
        if(arr1[i] > arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    while (i<len1) {
        res.push(arr1[i]);
        i++;
    }
    while (j<len2) {
        res.push(arr2[j]);
        j++;
    }
    return res;
}

const mergeSort = (arr) => {
    if(arr.length <=1) return arr;
    const mid =  Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    // return merge(left, right);
    let res = [];
    let i=j=0;
    let len1 = left.length, len2 = right.length;
    while(i<len1 && j<len2) {
        if(left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    while (i<len1) {
        res.push(left[i]);
        i++;
    }
    while (j<len2) {
        res.push(right[j]);
        j++;
    }
    return res;
}

mergeSort([20,30,100, 28, 0.1]);
