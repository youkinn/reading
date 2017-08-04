function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    // 在列表尾部添加一个元素
    this.append = function (element) {};

    // 在列表的指定位置添加一个元素
    this.insert = function (position, element) {};

    // 移除一个列表元素
    this.remove = function (element) {};

    // 移除指定位置的元素
    this.removeAt = function (position) {};

    // 返回元素在列表中的索引
    this.indexOf = function (element) {};

    // 返回当前链表是否为空
    this.isEmpty = function () {};

    // 返回链表长度
    this.size = function () {};

    // 输出链表元素
    this.toString = function () {};
}