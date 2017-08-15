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

})('ArrayList', function () {



    function ArrayList() {
        var array = [];

        var swap = function (index1, index2) {
            var aux = array[index1];
            array[index1] = array[index2];
            array[index2] = aux;
        };

        this.insert = function (item) {
            array.push(item);
        };

        this.bubbleSort = function () {
            var length = array.length;
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        swap(j, j + 1);
                    }
                }
            }
        };

        this.toString = function () {
            return array.join();
        };
    }

    return ArrayList;
});