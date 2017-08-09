;
(function (name, definition) {

    // 检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === 'function';

    // 检测上下文环境是否为Node
    var hasExports = typeof module === 'object' && module.exports;

    if (hasDefine) { // AMD环境或CMD环境
        define(definition);
    } else if (hasExports) { // 定义为普通Node模块
        module.exports = definition();
    } else {
        // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }

})('BinarySearchTree', function () {

    function BinarySearchTree() {
        var Node = function (key) {
            this.key = key;
            this.left = null;
            this.right = null;
        };

        var root = null;

        // 向书中插入一个新的键
        this.insert = function (key) {
            var newNode = new Node(key);

            if (root === null) {
                root = newNode;
            } else {
                insertNode(root, newNode);
            }

            /**
             * 向树的指定位置插入节点
             * 
             * @param {any} currNode 当前节点
             * @param {any} newNode 新节点
             */
            function insertNode(parentNode, newNode) {
                if (newNode.key < parentNode.key) {
                    if (!parentNode.left) {
                        parentNode.left = newNode;
                    } else {
                        insertNode(parentNode.left, newNode);
                    }
                } else {
                    if (!parentNode.right) {
                        parentNode.right = newNode;
                    } else {
                        insertNode(parentNode.right, newNode);
                    }
                }
            }
        };

        // 在书中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
        this.search = function (key) {};

        // 通过中序遍历方式查找所有节点
        this.inOrderTraverse = function (callback) {
            inOrderTraverse(root, callback);

            function inOrderTraverse(node, callback) {
                if (node !== null) {
                    inOrderTraverse(node.left, callback);
                    callback(node.key);
                    inOrderTraverse(node.right, callback);
                }
            }
        };

        // 通过先序遍历方式查找所有节点
        this.preOrderTraverse = function () {};

        // 返回树中最小的值/键
        this.min = function () {};

        // 返回树中最大的值/键
        this.max = function () {};

        // 从书中移除某个键
        this.remove = function (key) {};
    }

    return BinarySearchTree;
});