; (function (name, definition) {

    // 检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === 'function';

    // 检测上下文环境是否为Node
    var hasExports = typeof module === 'object' && module.exports;

    if (hasDefine) {  // AMD环境或CMD环境
        define(definition);
    } else if (hasExports) {  // 定义为普通Node模块
        module.exports = definition();
    } else {
        // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }

})('LinkedList', function () {

    function LinkedList() {
        var head = null; // 链表头部
        var length = 0; // 链表长度

        // 链表节点
        var Node = function (element) {
            this.element = element;
            this.next = null;
        };

        // 在列表尾部添加一个元素
        this.append = function (element) {
            var current = head;
            var node = new Node(element);

            if (!length) {
                head = node;
            } else {
                while (current && current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            length++;
            return this;
        };

        // 在列表的指定位置添加一个元素
        this.insert = function (position, element) {
            var current = head;
            var prev = null;
            var index = 0;
            var node = new Node(element);

            // 边界检查
            if (position > length) {
                throw Error('index > length');
            }

            // 添加元素到链表中
            if (position == 0) {
                node.next = head;
                head = node;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                prev.next = node;
                node.next = current;
            }
            length++;
            return this;
        };

        // 移除指定位置的元素
        this.removeAt = function (position) {
            var current = head;
            var prev = null;
            var index = 0;

            // 边界检查
            if (position > length) {
                console('remove element error!position > length.');
                return;
            }

            // 添加元素到链表中
            if (position == 0) {
                head = head.next;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            length--;
            return this;
        };

        // 移除一个列表元素
        this.remove = function (element) {
            var index = this.indexOf(element);
            this.removeAt(index);
            return this;
        };

        // 返回元素在列表中的索引
        this.indexOf = function (element) {
            var current = head;
            var index = 0;
            while (current) {
                if (current.element === element) {
                    return index;
                }
                current = current.next;
                index++;
            }
            return -1;
        };

        // 返回链表的第一个元素
        this.getHead = function () {
            return head;
        };

        // 返回当前链表是否为空
        this.isEmpty = function () {
            return length === 0;
        };

        // 返回链表长度
        this.size = function () {
            return length;
        };

        // 输出链表元素
        this.print = function () {
            var current = head;
            var elements = [];
            if (!length) {
                console.log('链表为空');
            }
            else {
                while (current) {
                    elements.push(current);
                    current = current.next;
                }
                console.log(elements);
            }
            return this;
        };
    }

    return LinkedList;
});