/*
*/

const getDigit = (number, dig) => {
    return Math.floor(Math.abs(number) / Math.pow(10, dig)) % 10;
}

const digitCount = (number) => {
    if(number === 0) return 1;
    return Math.ceil(Math.log10(Math.abs(number)));
}

const mostDigits = (arr) => {
    const len = arr.length;
    let max = 1;
    for(let i=0; i<len; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }
    return max;
}

const radixSort = (nums) => {
    const maxDigitCount = mostDigits(nums);
    const len = nums.length;
    const buckets = [];
    for(let k=0; k<maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i=0; i<len; i++) {
            const digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
radixSort([12,1232,2311,123,2, 32,123,9899]);
