import mergeSort from "./mergesort.mjs";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  #root;

  constructor(array) {
    this.#root = this.buildTree(mergeSort(removeDuplicates(array)));
  }

  get root() {
    return this.#root;
  }

  buildTree(array) {
    if (Array.isArray(array)) {
      const midPoint = Math.floor(array.length / 2);
      const root = new Node(array[midPoint]);

      if (array.length === 0) return null;
      if (array.length > 1) {
        root.left = this.buildTree(array.slice(0, midPoint));
        root.right = this.buildTree(array.slice(midPoint + 1));
      }
      return root;
    }
  }

  insert(value) {
    let currentNode = this.#root;

    while (currentNode) {
      if (currentNode.data === value) {
        return;
      } else if (currentNode.data > value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(value);
          return;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(value);
          return;
        }
      }
    }
  }

  find(value) {
    let currentNode = this.#root;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode;
      } else if (currentNode.data > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  deleteItem(value) {
    let currentNode = this.#root;

    while (currentNode) {
      if (currentNode.left.data === value) {
        if (currentNode.left.left === null && currentNode.left.right === null)
          currentNode.left = null;
        return;
      } else if (currentNode.right.data === value) {
        if (currentNode.right.left === null && currentNode.right.right === null)
          currentNode.right = null;
        return;
      } else {
        if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return null;
  }
}

function removeDuplicates(array) {
  return Array.from(new Set(array));
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export { prettyPrint, Tree };
