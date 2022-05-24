class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        // function bubbleup(arr, ind) {
        //     const child = arr[ind];
        //     const parentInd = Math.floor((ind-1)/2);
        //     const parent = arr[parentInd];
        //     if(parent < child) {
        //         [arr[ind], arr[parentInd]] = [arr[parentInd], arr[ind]];
        //         bubbleup(arr, parentInd);
        //     }
        // }
        // bubbleup(this.values, this.values.length-1);
        // return this.values;
        console.log(this.values)
        this.bubbleUp();
    }

    bubbleUp() {
        let ind = this.values.length - 1;
        const element = this.values[ind];
        while(ind > 0) {
            const parentInd = Math.floor((ind - 1)/2);
            const parent = this.values[parentInd];
            if(parent > element) {
                return this.values;
            }
            this.values[parentInd] = element;
            this.values[ind] = parent;
            ind = parentInd;
        }
    }
}

const heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(10);
heap.insert(20);
heap.insert(150);
heap.insert(15);
heap.insert(25);

//[150, 100, 25, 10, 15, 20]
