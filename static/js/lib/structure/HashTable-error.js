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

})('HashTable', function () {

    function HashTable() {
        var table = [];

        // 散列函数
        var loseloseHashCode = function (key) {
            var hash = 0;
            for (var i = 0, j = key.length; i < j; i++) {
                hash += key.charCodeAt(i);
            }
            return hash % 37;
        };

        // 向散列表添加一个新的项(也能更新散列表)
        this.put = function (key, value) {
            var position = loseloseHashCode(key);
            table[position] = value;
            return this;
        };

        // 根据键值从散列表表中移除值
        this.remove = function (key) {
            table[loseloseHashCode(key)] = undefined;
            return this;
        };

        // 返回根据键值检索到的特定的值
        this.get = function () {
            return table[loseloseHashCode(key)];
        };

        this.print = function () {
            for (var i = 0, j = table.length; i < j; i++) {
                if (table[i] !== undefined) {
                    console.log(i + '-' + table[i]);
                }
            }
        };
    }

    return HashTable;
});