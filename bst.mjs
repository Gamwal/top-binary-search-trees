import mergeSort from "./mergesort.mjs";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  #data;
  #array;
  constructor(array) {
    this.#array = array;
    this.#data = buildTree(array);
  }

  get data() {
    return this.#data;
  }
}

function buildTree(array) {
  if (Array.isArray(array)) {
    const newArray = mergeSort(removeDuplicates(array));
    const midPoint = Math.floor(newArray.length / 2);
    const root = new Node(newArray[midPoint]);

    if (newArray.length === 0) return null;
    if (newArray.length > 1) {
      root.left = buildTree(newArray.slice(0, midPoint));
      root.right = buildTree(newArray.slice(midPoint + 1));
    }
    return root;
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

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// console.log(tree.data);

// console.log(buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));

console.log(prettyPrint(tree.data));
