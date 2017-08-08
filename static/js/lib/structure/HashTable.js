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

})('HashTable', function () {

  function HashTable() {

    var table = [];

    var ValuePair = function (key, value) {
      this.key = key;
      this.value = value;
      this.toString = function () {
        return '[' + this.key + ' - ' + this.value + ']';
      }
    };

    var loseloseHashCode = function (key) {
      var hash = 5381;
      for (var i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i);
      }
      return hash % 1013;
    };

    // 向散列表增加一个新的项
    this.put = function (key, value) {
      var position = loseloseHashCode(key);
      if (table[position] === undefined) {
        table[position] = new ValuePair(key, value);
        return this;
      }
      /**
       * 循环检测该位置是否已被占用
       * 若已被占用，则继续检测下一个位置，直到可用为止
       * 主要是为了解决散列函数生成的位置冲突问题
       * 
       * 还有两种解决方案：双散列法、以及使用链表
       */
      var index = position + 1;
      while (table[index] !== undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
      return this;
    };

    // 根据键值获取对应的值
    this.get = function (key) {
      var position = loseloseHashCode(key);
      if (table[position] === undefined) {
        return undefined;
      }
      if (table[position].key === key) {
        return table[position].value;
      }
      var index = position + 1;
      while (table[index] === undefined || table[index].key !== key) {
        index++;
      }
      return table[index].value;
    };

    // 根据键值从散列表中移除值
    this.remove = function (key) {
      var position = loseloseHashCode(key);
      if (table[position] === undefined) {
        return this;
      }
      if (table[position].key === key) {
        table[position].value = undefined;
        return this;
      }
      var index = position + 1;
      while (table[index] === undefined || table[index].key !== key) {
        index++;
      }
      table[index].value = undefined;
      return this;
    };

    this.print = function () {
      for (var i = 0; i < table.length; ++i) {
        if (table[i] !== undefined) {
          console.log(i + ": " + table[i]);
        }
      }
    };
  }

  return HashTable;
});