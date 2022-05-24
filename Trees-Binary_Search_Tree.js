class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
}

const tree = new BinarySearchTree();
tree.insert(40);
tree.insert(90);
tree.insert(99);
tree.insert(80);
