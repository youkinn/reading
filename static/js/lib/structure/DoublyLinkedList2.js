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
        node.prev = current;
      }
      length++;
      return this;
    };

    this.insert = function (position, element) {

      // 检查越界值
      if (position >= 0 && position <= length) {
        var node = new Node(element);
        var current = head;
        var previous = null;
        var index = 0;

        if (position === 0) {
          if (!head) {
            head = node;
            tail = node;
          }
          else {
            node.next = current;
            current.prev = node;
            head = node;
          }
        }
        else if (position === length) {
          current = tail;
          current.next = node;
          node.prev = current;
          tail = node;
        }
        else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;

          current.prev = node;
          node.prev = previous;
        }

        length++;

        return true;
      } else {
        return false;
      }
    };

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
        head.prev = null;
      } else {
        while (index++ < position) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
        if (current.next) {
          current.next.prev = prev;
        }
      }
      length--;
      return this;
    };

    this.remove = function (element) {
      var index = this.indexOf(element);
      this.removeAt(index);
      return this;
    };

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

    this.isEmpty = function () {
      return length === 0;
    };

    this.size = function () {
      return length;
    };

    this.toString = function () { };

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

  return DoublyLinkedList;
});