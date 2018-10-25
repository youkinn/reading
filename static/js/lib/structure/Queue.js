


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

})('Queue', function () {

  function Queue() {
    this.items = [];
    this.enqueue = function (element) {
      this.items.push(element);
    };
    this.dequeue = function () {
      return this.items.shift();
    };
    this.front = function () {
      return this.items[0];
    };
    this.isEmpty = function () {
      return this.items.length == 0;
    };
    this.size = function () {
      return this.items.length;
    };
    this.print = function () {
      console.log(this.items.toString());
    }
  }

  return Queue;
});