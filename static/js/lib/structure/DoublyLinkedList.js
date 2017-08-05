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

})('DoublyLinkedList', function () {

  function DoublyLinkedList() {
    var head = null; // 链表头部
    var tail = null; // 链表尾部
    var length = 0; // 链表长度

    // 链表节点
    var Node = function (element) {
      this.element = element;
      this.prev = null;
      this.next = null;
    };

    // 在列表尾部添加一个元素
    this.append = function (element) {
      var current = head;
      var node = new Node(element);

      if (!length) {
        head = node;
        tail = node;
      } else {
        while (current && current.next) {
          current = current.next;
        }
        current.next = node;
        node.prev = current;
        tail = node;
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
        if (!head) {
          head = node;
          tail = node;
        }
        else {
          node.next = head;
          head = node;
          current.prev = node;
        }
      } else {
        while (index++ < position) {
          prev = current;
          current = current.next;
        }

        // 设置新元素的指针指向
        node.prev = prev;
        node.next = current;

        // 修正插入节点前后节点的指向
        prev.next = node;
        current.prev = node;

        if (position == length) {
          tail = node;
        }
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
      if (position > length - 1) {
        throw Error('remove element error!position > length.');
        return;
      }

      // 移除元素
      if (position == 0) {
        head = head.next;
        if (head) {
          head.prev = null;
        }

        // 如果是最后一项，清空链表尾部指针
        if(length === 1){
          tail = null;
        }
      } else if (position === length - 1) {
        prev = tail.prev;
        prev.next = null;
        tail = prev;
      }
      else {
        while (index++ < position) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
        current.next.prev = prev;
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

    this.getTail = function () {
      return tail;
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
          elements.push(current.element);
          current = current.next;
        }
        console.log(elements);
      }
      return this;
    };
  }

  return DoublyLinkedList;
});