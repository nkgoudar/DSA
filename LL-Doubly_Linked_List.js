/*

*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    pop() {
        if(this.length === 0) return undefined;
        const poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length -= 1;
        return poppedNode;
    }
    shift() {
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length -= 1;
        return oldHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }
    get(ind) {
        if(ind < 0 || ind >= this.length) return undefined;
        let reverse = false;
        let curr = this.head, count = 0;
        if(ind > (this.length / 2)) {
            reverse = true;
            count = this.length - 1;
            curr = this.tail;
        }
        while(count !== ind) {
            if(reverse) {
                curr = curr.prev;
                count--;
            } else {
                curr = curr.next;
                count++;
            }
        }
        return curr;
    }
    set(ind, val) {
        // if(ind < 0 || ind >= this.length) return false;
        // let reverse = false;
        // let curr = this.head, count = 0;
        // if(ind > (this.length / 2)) {
        //     reverse = true;
        //     count = this.length - 1;
        //     curr = this.tail;
        // }
        // while(count !== ind) {
        //     if(reverse) {
        //         curr = curr.prev;
        //         count--;
        //     } else {
        //         curr = curr.next;
        //         count++;
        //     }
        // }
        // curr.val = val;
        // return true;
        const node = this.get(ind);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }
    insert(ind, val) {
        if(ind < 0 || ind > this.length) return false;
        if(ind === 0) return !!this.unshift(val);
        if(ind === this.length) return !!this.push(val);
        
        const newNode = new Node(val);
        const beforeNode = this.get(ind-1);
        const afterNode = beforeNode.next;
        
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        
        this.length += 1;
        return true;
    }
    remove(ind) {
        if(ind < 0 || ind >= this.length) return undefined;
        if(ind === 0) return this.shift(val);
        if(ind === this.length - 1) return this.pop(val);
        
        const removedNode = this.get(ind);
        const beforeNode = removedNode.prev, afterNode = removedNode.next;
        
        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        removedNode.prev = null, removedNode.next = null;
        
        this.length -= 1;
        return removedNode;
    }
}

let List = new DoublyLinkedList();
List.push(0);
List.push(1);
List.push(2);
List.push(3);
List.push(4);
