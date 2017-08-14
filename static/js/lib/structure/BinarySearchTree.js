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
        var root = null;
        var Node = function (key) {
            this.key = key;
            this.left = null;
            this.right = null;
        };

        var searchNode = function (node, key) {
            if (!node) {
                return false;
            }
            /**
             * 本来可以直接遍历整棵树：
             * searchNode(node.left);
             * searchNode(node.right);
             * 这里利用了二叉搜索树左边节点的值永远小于父节点，右边节点的值永远大于等于父节点的特性 优化搜索
             */
            if (key < node.key) {
                searchNode(node.left, key);
            } else if (key >= node.key) {
                searchNode(node.right, key);
            } else {
                return true;
            }
        }

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

        // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
        this.search = function (key) {
            return !!searchNode(root, key);
        };

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
        this.preOrderTraverse = function (callback) {
            inOrderTraverse(root, callback);

            function inOrderTraverse(node, callback) {
                if (node !== null) {
                    callback(node.key);
                    inOrderTraverse(node.left, callback);
                    inOrderTraverse(node.right, callback);
                }
            }
        };

        // 通过后序遍历方式查找所有节点
        this.postOrderTraverse = function (callback) {
            inOrderTraverse(root, callback);

            function inOrderTraverse(node, callback) {
                if (node !== null) {
                    inOrderTraverse(node.left, callback);
                    inOrderTraverse(node.right, callback);
                    callback(node.key);
                }
            }
        };

        // 返回树中最小的值/键
        this.min = function () {
            if (!root) {
                return null;
            }
            var current = root;
            var prev = null;
            while (current) {
                prev = current;
                current = current.left;
            }
            return prev.key;
        };

        // 返回树中最大的值/键
        this.max = function () {
            if (!root) {
                return null;
            }
            var current = root;
            var prev = null;
            while (current) {
                prev = current;
                current = current.right;
            }
            return prev.key;
        };

        // 从树中移除某个键
        this.remove = function (key) {};
    }

    return BinarySearchTree;
});