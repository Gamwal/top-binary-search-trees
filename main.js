import { Tree, prettyPrint } from "./bst.mjs";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(prettyPrint(tree.root));
tree.insert(3.5);
tree.insert(7.5);
tree.insert(40);
tree.insert(6700);
console.log(prettyPrint(tree.root));
