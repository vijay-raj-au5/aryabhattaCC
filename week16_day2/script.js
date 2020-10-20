class  Node {
    constructor(val) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)

        if(this.root === null) {
            this.root = newNode;

        }else{
            this.insertNode(this.root,newNode)

        }

    }

    insertNode(node,newNode) {
        if(newNode.val < node.val) {
            this.insertNode(node.left,newNode)
        }
        else {
            this.insertNode(node.right,newNode)
        }
    }

    getNode(){
        return this.root
    }

}

var binarytree = new BST()
binarytree.insert(5)
binarytree.insert(15)
binarytree.insert(1)
binarytree.insert(20)
binarytree.insert(25)
binarytree.insert(30)

var root = binarytree.getNode();
console.log(root)
    