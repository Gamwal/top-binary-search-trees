import { Tree, prettyPrint } from "./bst.mjs";

function generateRandomArray(length, min, max) {
  const inputArray = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    inputArray.push(randomNumber);
  }
  return inputArray;
}

const treeArray = generateRandomArray(99, 0, 100);

const tree = new Tree(treeArray);

console.log(tree.isBalanced());
prettyPrint(tree.root);

tree.inOrder((node) => console.log(node.data));
tree.preOrder((node) => console.log(node.data));
tree.postOrder((node) => console.log(node.data));

const newTreeArray = generateRandomArray(20, 100, 200);

newTreeArray.map((item) => {
  tree.insert(item);
});

console.log(tree.isBalanced());
prettyPrint(tree.root);

tree.rebalance();
console.log(tree.isBalanced());
prettyPrint(tree.root);

tree.inOrder((node) => console.log(node.data));
tree.preOrder((node) => console.log(node.data));
tree.postOrder((node) => console.log(node.data));
