
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

})('BinaryTree', function () {

    var Queue = require('./Queue.js');

    function BinaryTree() {
        var _root;
        var _size = 0;

        // 节点类
        var Node = function (data, parent) {
            this.parent = parent;
            this.lChild = null;
            this.rChild = null;
            this.data = data;
            this.height = 0;

            // 作为左孩子插入新节点
            this.insertAsLC = function (data) {
                return this.lChild = new Node(data, this);
            };

            // 作为右孩子插入新节点
            this.insertAsRC = function (data) {
                return this.rChild = new Node(data, this);
            };

            // 后代总数
            this.size = function () {
                var sum = 1;
                if (this.lChild) sum += this.lChild.size();
                if (this.rChild) sum += this.lChild.size();
                return sum;
            };

            // 当前节点的直接后继(中序遍历)
            this.succ = function () {

            };

            // 子树先序遍历
            this.preOrderTraverse = function (visit) {
                preOrderTraverse(this, visit);
            };

            // 子树中序遍历
            this.inOrderTraverse = function (visit) {
                inOrderTraverse(this, visit);
            };

            // 子树后序遍历
            this.postOrderTraverse = function (visit) {
                postOrderTraverse(this, visit);
            };
        };

        // 树根
        this.root = function () {
            return _root;
        };

        // 规模
        this.size = function () {
            return _size;
        };

        // 判空
        this.empty = function () {
            return !_root;
        };

        // 返回树的高度
        this.height = function () {
            return _root ? _root.height : -1;
        };

        // 插入操作
        this.insert = function (e) {
            if (!_root) {
                _root = new Node(e)
                updateHeightAbove(_root, null);
                return _root;
            }
            var q = new Queue();
            q.enqueue(_root);
            var node;
            while (!q.isEmpty()) {
                node = q.dequeue();
                if (node.lChild) {
                    q.enqueue(node.lChild);
                } else {
                    return insertAsLC(node, e);
                }
                if (node.rChild) {
                    q.enqueue(node.rChild);
                } else {
                    return insertAsRC(node, e);
                }
            }
        };

        // 删除

        // 先序遍历
        this.preOrderTraverse = function preOrderTraverse(x, visit) {
            if (!x) return;
            visit(x);
            this.preOrderTraverse(x.lChild);
            this.preOrderTraverse(x.rChild);
        };

        // 中序遍历
        this.inOrderTraverse = function inOrderTraverse(x, visit) {
            if (!x) return;
            this.inOrderTraverse(x.lChild, visit);
            visit(x);
            this.inOrderTraverse(x.rChild, visit);
        };

        // 后序遍历
        this.postOrderTraverse = function postOrderTraverse(x, visit) {
            if (!x) return;
            this.postOrderTraverse(x.lChild);
            this.postOrderTraverse(x.rChild);
            visit(x);
        };

        // 层次遍历
        this.levelTraverse = function levelTraverse(visit) {
            var q = new Queue();
            q.enqueue(this.root());
            while (!q.isEmpty()) {
                var node = q.dequeue();
                visit(node.data);
                if (node.lChild) q.enqueue(node.lChild);
                if (node.rChild) q.enqueue(node.rChild);
            }
        };

        // 插入节点作为左节点
        function insertAsLC(x, e) {
            _size++;
            x.insertAsLC(e);
            updateHeightAbove(x);
            return x.lChild;
        };

        // 插入节点作为右节点
        function insertAsRC(x, e) {
            _size++;
            x.insertAsRC(e);
            updateHeightAbove(x);
            return x.rChild;
        };

        // 更新节点x及祖先节点的高度
        function updateHeightAbove(x) {
            while (x) {
                updateHeight(x);
                x = x.parent;
            }
        }

        // 更新节点x的高度 空树：-1、只有根节点的树：0、
        function updateHeight(x) {
            var height;
            if (x.lChild && x.rChild) {
                height = Math.max(x.lChild.height, x.rChild.height) + 1;
            } else if (x.lChild && !x.rChild) {
                height = x.lChild.height + 1;
            }
            else if (x.rChild && !x.lChild) {
                height = x.rChild.height + 1;
            }
            else {
                height = 0;
            }
            x.height = height;
        }
    }
    return BinaryTree;
});