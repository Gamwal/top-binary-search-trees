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
  #isLeaf(node) {
    return node.left === null && node.right === null;
  }

  #hasOneChild(node) {
    if (!node.left && node.right) return node.right;
    else if (node.left && !node.right) return node.left;
    return null;
  }

  #findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

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
    let parentNode = null;

    while (currentNode) {
      if (currentNode.data === value) {
        if (this.#isLeaf(currentNode)) {
          if (currentNode === parentNode.left) parentNode.left = null;
          else parentNode.right = null;
        } else if (this.#hasOneChild(currentNode)) {
          if (currentNode === parentNode.left)
            parentNode.left = this.#hasOneChild(currentNode);
          else parentNode.right = this.#hasOneChild(currentNode);
        } else {
          const repl = this.#findMinNode(currentNode.right);
          this.deleteItem(repl.data);
          currentNode.data = repl.data;
        }
        return;
      } else {
        parentNode = currentNode;
        if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return null;
  }

  levelOrder(callback) {
    if (typeof callback !== "function") throw new Error("callback required");

    let queue = [];
    queue.push(this.#root);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      callback(currentNode);
    }
  }

  inOrder(callback, node = this.#root) {
    if (typeof callback !== "function") throw new Error("callback required");

    if (node === null) return;
    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  preOrder(callback, node = this.#root) {
    if (typeof callback !== "function") throw new Error("callback required");

    if (node === null) return;
    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  postOrder(callback, node = this.#root) {
    if (typeof callback !== "function") throw new Error("callback required");

    if (node === null) return;
    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    callback(node);
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
