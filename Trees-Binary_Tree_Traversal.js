/*

TWO WAYS OF TRAVERSING A BINARY TREE

1. BREADTH-FIRST SEARCH
2. DEPTH-FIRST SEARCH

*/


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {           //O(log n)
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let node = this.root;
        while(true) {
            if(value === node.value) return undefined;
            if(value < node.value) {
                if(node.left) node = node.left;
                else {
                    node.left = newNode;
                    return this;
                }
            } else {
                if(node.right) node = node.right
                else {
                    node.right = newNode;
                    return this;
                }
            } 
        }
    }

    contains(value) {           //O(log n)
        if(!this.root) return false;
        let node = this.root;
        while(true){
            if(node.value === value) return true;
            if(value < node.value && node.left) node = node.left;
            else if(node.right) node = node.right;
            else return false;
        }
    }

    BFS() {
        let data = [], queue = [];
        queue.push(this.root);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        const data = [];

        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        const data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        const data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(40);
binaryTree.insert(20);
binaryTree.insert(30);
binaryTree.insert(90);
binaryTree.insert(99);
binaryTree.insert(80);
binaryTree.insert(10);
