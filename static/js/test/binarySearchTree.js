require(['../lib/structure/BinarySearchTree'],
    function (BinarySearchTree) {

        var tree = new BinarySearchTree();
        tree.insert(11);
        tree.insert(13);
        tree.insert(12);
        tree.insert(16);
        tree.insert(20);

        function printNode(value) {
            console.log(value);
        }

        tree.inOrderTraverse(printNode);

    });