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
        var hot = null;
        var Node = function (key) {
            this.key = key;
            this.left = null;
            this.right = null;
            this.parent = null;
        };

        var searchNode = function (node, key) {

            // 当node为空或者找到指定的元素时，结束查找
            if (!node || node.key == key) {
                return node;
            }
            hot = node;

            // 如果key值比该节点的小，则在左子树上查找；反之，则在右子树上查找
            if (key < node.key) {
                return searchNode(node.left, key, hot);
            }
            return searchNode(node.right, key, hot);
        }

        // 在树中查找一个键，如果节点存在，则返回该节点；否则，则返回null
        this.search = function (key) {
            return searchNode(root, key);
        };

        // 向数中插入一个新的值
        this.insert = function (key) {
            var result = this.search(key);
            if (result) return result;
            var node = new Node(key);
            if (!root) {
                root = node;
                return root;
            }
            key < hot.key ? hot.left = node : hot.right = node;
            return node;
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
        this.remove = function (key) { };
    }

    return BinarySearchTree;
});