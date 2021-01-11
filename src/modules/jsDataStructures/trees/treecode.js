/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

const block = {
  1() {
    const Node = this[3]();
    return class BinarySearchTree {
      constructor() {
        this.root = null;
      }

      insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
          this.root = newNode;
        } else {
          let currentNode = this.root;
          while (true) {
            if (value < currentNode.value) {
              if (!currentNode.left) {
                currentNode.left = newNode;
                return;
              }
              currentNode = currentNode.left;
            } else {
              if (!currentNode.right) {
                currentNode.right = newNode;
                return;
              }
              currentNode = currentNode.right;
            }
          }
        }
      }
    };
  },
  2() {
    const BinarySearchTree = this[1]();

    return () => {
      const binarySearchTree = new BinarySearchTree(1);
      binarySearchTree.insert(10);
      binarySearchTree.insert(2);
      binarySearchTree.insert(4);
      binarySearchTree.insert(20);
      binarySearchTree.insert(10);
      binarySearchTree.insert(170);
    };
  },
  3() {
    return class Node {
      constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
      }
    };
  },
};

export default block;
