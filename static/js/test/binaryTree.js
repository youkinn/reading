require(['../lib/structure/BinaryTree'],
    function (BinaryTree) {

        var tree = new BinaryTree();
        tree.insert(11);
        tree.insert(7);
        tree.insert(15);
        tree.insert(5);
        tree.insert(3);
        tree.insert(9);
        tree.insert(8);
        tree.insert(10);
        tree.insert(13);
        tree.insert(12);
        tree.insert(14);
        tree.insert(20);
        tree.insert(18);
        tree.insert(25);
        tree.insert(6);

        tree.inOrderTraverse(tree.root(), printNode);
        // tree.insert(30);
        // tree.inOrderTraverse(tree.root(), printNode);

        function printNode(value) {
            console.log(value);
        }
    });