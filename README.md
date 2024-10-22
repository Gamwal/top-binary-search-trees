# Balanced Binary Search Tree (BST)

This project implements a balanced Binary Search Tree (BST) with core operations such as insertion, deletion, traversal, and rebalancing. The tree ensures that the height remains optimal, providing efficient search, insert, and delete operations.

## Features

- **Balanced BST**: Automatically balances itself after each operation.
- **Tree Operations**:
  - **Insert**: Add elements to the tree while maintaining balance.
  - **Delete**: Remove elements, including nodes with one or two children.
  - **Traversal**: Supports in-order, pre-order, post-order, and level-order traversals.
  - **Rebalance**: Rebalances the tree if it becomes unbalanced.
  - **Height & Depth**: Calculate the height and depth of any node.
- **Custom Callbacks**: Accepts callback functions for traversal methods to perform actions on nodes.
- **Pretty Print**: Visualize the tree structure in the console.

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/Gamwal/top-binary-search-trees.git
   ```
2. Import the `Tree` and `prettyPrint` functions from the module:

   ```javascript
   import { Tree, prettyPrint } from "./path/to/tree.mjs";
   ```

3. Use `mergeSort.mjs` as the sorting algorithm for initial tree construction.

## Example Usage

```javascript
const myTree = new Tree([7, 4, 9, 1, 6, 14]);
prettyPrint(myTree.root); // Visualize the tree
```

## Requirements

- JavaScript ES6+
- Node.js (optional)

## License

This project is open-source under the MIT License.
