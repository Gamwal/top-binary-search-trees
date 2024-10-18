import { Tree, prettyPrint } from "./bst.mjs";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// console.log(prettyPrint(tree.root));
// tree.insert(3.5);
// tree.insert(7.5);
// tree.insert(40);
// tree.insert(6700);
// tree.insert(-1);
// tree.insert(7.6);
// tree.insert(4.1);
// tree.insert(4.2);
// tree.insert(4.3);
// console.log(prettyPrint(tree.root));
// console.log(tree.find(1));
// console.log(tree.find(0));
// console.log(tree.deleteItem(3.5));
// console.log(tree.deleteItem(5));
// console.log(tree.deleteItem(-1));
// console.log(tree.deleteItem(8));
tree.levelOrder((node) => console.log(node.data));
console.log(prettyPrint(tree.root));
tree.inOrder((node) => console.log(node.data));
// console.log(prettyPrint(tree.root));
