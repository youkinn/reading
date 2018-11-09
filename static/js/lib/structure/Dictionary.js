export default function Dictionary() {
  var items = {};
  var length = 0;

  // 如果某个键值存在于这个字典中，则返回true，反之则返回false
  this.has = function(key) {
    return key in items;
  };

  // 向字典中添加新元素
  this.set = function(key, value) {
    if (!this.has(key)) {
      length++;
    }
    items[key] = value;
    return this;
  };

  // 通过使用键值来从字典中移除键值对应的数据值
  this.remove = function(key) {
    if (this.has(key)) {
      length--;
    }
    delete items[key];
    return this;
  };

  // 通过键名查找特定的数值并返回
  this.get = function(key) {
    return items[key];
  };

  // 将这个字典中的所有元素全部删除
  this.clear = function() {
    items = {};
    length = 0;
    return this;
  };

  // 返回字典所包含元素的数量。与数组的length属性类似
  this.size = function() {
    return length;
  };

  // 将字典所包含的所有键名以数组形式返回
  this.keys = function() {
    var result = [];
    for (p in items) {
      if (items.hasOwnProperty(p)) {
        result.push(p);
      }
    }
    return result;
  };

  // 将字典所包含的所有数值以数组形式返回
  this.values = function() {
    var result = [];
    for (p in items) {
      if (items.hasOwnProperty(p)) {
        result.push(items[p]);
      }
    }
    return result;
  };

  // 输出所有元素
  this.print = function() {
    console.log(items);
  };
}
