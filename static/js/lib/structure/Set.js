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

})('Set', function () {

  function Set() {

    var items = {};
    var length = 0;

    // 如果值在集合中，返回true，否则返回false
    this.has = function (value) {
      var values = this.values();
      for (var i = 0, j = values.length; i < j; i++) {
        if (value === values[i]) {
          return true;
        }
      }
      return false;
    };

    // 向集合添加一个新的项
    this.add = function (value) {
      if (!this.has(value)) {
        /**
         * 这里有个bug，数值跟字符串无法共存
         * item[1] = 1;
         * item['1'] = '1';
         */
        items[value] = value;
        length++;
      }
      return this;
    };

    // 从集合移除一个值
    this.remove = function (value) {
      if (this.has(value)) {
        delete items.value;
        length--;
      }
      return this;
    };

    // 移除集合中的所有项
    this.clear = function () {
      items = {};
      return this;
    };

    // 返回集合所包含元素的数量
    this.size = function (value) {
      return length;
    };

    this.entries = function () {
      return items;
    };

    // 返回一个包含集合中所有值的数组
    this.values = function () {
      var result = [];
      for (p in items) {
        if (items.hasOwnProperty(p)) {
          result.push(items[p]);
        }
      }
      return result;
    };

    /*
     * 并集
     * 由所有属于A或属于B的元素组成的集合,叫做A与B的并集
     */
    this.union = function (otherSet) {
      var unionSet = new Set();
      var values = this.values();
      for (var i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }
      values = otherSet.values();
      for (var i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }
      return unionSet;
    };

    /*
     * 交集
     * 由所有属于A且属于B的元素所组成的集合,叫做A与B的交集
     */
    this.intersection = function (otherSet) {
      var intersectionSet = new Set();
      var values = this.values();
      for (var i = 0, j = values.length; i < j; i++) {
        if (otherSet.has(values[i])) {
          intersectionSet.add(values[i]);
        }
      }
      return intersectionSet;
    };

    /*
     * 差集
     * 由所有属于A而不属于B的元素为元素的集合,叫做A与B的差集
     */
    this.difference = function (otherSet) {
      var differenceSet = new Set();
      var values = this.values();
      for (var i = 0, j = values.length; i < j; i++) {
        if (!otherSet.has(values[i])) {
          differenceSet.add(values[i]);
        }
      }
      return differenceSet;
    };

    /*
     * 子集
     * 集合A中的每一个元素，也存在于B中，此时，可以说 集合A是B的子集
     */
    this.subset = function (otherSet) {
      if (this.size() > otherSet.size()) {
        return false;
      }
      var values = this.values();
      for (var i = 0, j = values.length; i < j; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    };

    // 输出当前集合中的所有元素
    this.print = function () {
      console.log(this.values());
      return this;
    };
  }

  return Set;
});