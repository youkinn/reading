const BinaryTree = require('./lib/structure/BinaryTree.js');

const tree = new BinaryTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(13);
tree.insert(20);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(28);
tree.insert(30);

tree.levelTraverse(function (item) {
  console.log(item);
});

console.log('---------------------------');

console.log('size:' + tree.size() + ' height:' + tree.height() + ' root:' + tree.root().data);
