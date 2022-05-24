/*

LAST IN FIRST OUT (LIFO)

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop() {
        if(this.size === 0) return undefined;
        const node = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size -= 1;
        return node;
    }
}

let stack = new Stack();
