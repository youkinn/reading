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

})('BinaryTree', function () {

    function BinaryTree() {
        var _root;
        var _size;

        // 节点类
        var Node = function (data, parent) {
            this.parent = parent;
            this.lChild = null;
            this.rChild = null;
            this.data = data;
            this.height = -1;

            // 作为左孩子插入新节点
            this.insertAsLC = function (data) {
                return this.lChild = new Node(data, this);
            };

            // 作为右孩子插入新节点
            this.insertAsLC = function (data) {
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
            this.preOrderTraverse = function (callback) {

            };

            // 子树中序遍历
            this.inOrderTraverse = function (callback) {

            };

            // 子树后序遍历
            this.postOrderTraverse = function (callback) {

            };
        };

        // 更新节点x的高度 空树：-1、只有根节点的树：0、
        var updateHeight = function (x) {
            return x.height = Math.max(this.lChild.height, this.rChild.height) + 1;
        }

        // 更新节点x及祖先节点的高度
        var updateHeightAbove = function (x) {
            while (x) {
                updateHeight(x);
                x = x.parent;
            }
        }

        this.insertAsLC = function (x, e) {
            _size++;
            x.insertAsLC(e);
            updateHeightAbove(x);
            return x.lChild;
        };

        this.insertAsRC = function (x, e) {
            _size++;
            x.insertAsRC(e);
            updateHeightAbove(x);
            return x.rChild;
        };

        // 先序遍历
        this.preOrderTraverse = function (x, visit) {
            if (!x) return;
            visit(x);
            this.postOrderTraverse(x.lChild);
            this.postOrderTraverse(x.rChild);
        };

        // 中序遍历
        this.inOrderTraverse = function (callback) {
            if (!x) return;
            this.postOrderTraverse(x.lChild);
            visit(x);
            this.postOrderTraverse(x.rChild);
        };

        // 后序遍历
        this.postOrderTraverse = function (callback) {
            if (!x) return;
            this.postOrderTraverse(x.lChild);
            this.postOrderTraverse(x.rChild);
            visit(x);
        };

        // 规模
        this.size = function () {
            return _size;
        };

        // 判空
        this.empty = function () {
            return !_root;
        };

        // 树根
        this.root = function () {
            return _root;
        };

        // 删除
    }
    return BinaryTree;
});