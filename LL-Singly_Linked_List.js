/*

Piece of data - val
Reference to next node - next

INSERTION -> O(1)
REMOVAL -> O(1) or O(N)
SEARCHING -> O(N)
ACCESS -> O(N)

*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    traverse() {
        let curr = this.head;
        while(curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
    pop() {
        if(!this.head) {
             return undefined;   
        }
        // if(this.length === 1) {
        //     this.length = 0;
        //     const node = this.head;
        //     this.head = null;
        //     this.tail = null;
        //     return node;
        // }
        let curr = this.head;
        let newTail = curr;
        while(curr.next) {
            newTail = curr;
            curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curr;
    }

    shift() {
        if(this.length === 0) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if(this.length === 0) {
            this.tail = null;
        }
        return curr;
    }
    unshift(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        this.length += 1;
        if(this.length === 1) this.tail = this.head;
        return this
    }
    get(ind) {
        if(ind < 0 || ind >= this.length) return undefined;
        let curr = this.head, i=0;
        while(i < ind) {
            curr = curr.next;
            i++
        }
        return curr;
    }
    set(ind, val) {
        if(ind < 0 || ind >= this.length) return false;
        let curr = this.head, i=0;
        while(i < ind) { // instead use this.get
            curr = curr.next;
            i++
        }
        curr.val = val;
        return true;
    }
    insert(ind, val) {
        if(ind < 0 || ind > this.length) return undefined;
        if(ind === 0) return this.unshift(val);
        if(ind === this.length) return this.push(val);
        let curr = this.head, i = 0, prev = this.head;
        while(i < ind && curr) { // instead use this.get(ind-1) as prev
            prev = curr;
            curr = curr.next;
        }
        const node = new Node(val);
        prev.next = node;
        node.next = curr;
        this.length += 1;
        return this;
    }
    remove(ind) {
        if(ind < 0 || ind >= this.length) return undefined;
        if(ind === 0) return this.shift();
        if(ind === this.length - 1) return this.pop();
        let curr = this.head, i = 0, prev = this.head;
        while(i < ind ) { // or use this.get
            prev = curr;
            curr = curr.next;
            i++;
        }
        console.log(prev, curr)
        prev.next = curr.next;
        this.length -= 1;
        return this;
    }
    reverse() {
        let prev = null, next, curr = this.head;
        [this.tail, this.head] = [this.head, this.tail];
        let i = 0;
        while(i < this.length) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            i++;
        }
        return this;
    }
}

// var first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

var list = new SinglyLinkedList();
list.push("HI");
list.push("THERE");
list.push("HOW");
// list.push("ARE");
// list.push("YOU");
