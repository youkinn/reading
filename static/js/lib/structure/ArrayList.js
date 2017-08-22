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
        var array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

        var swap = function (index1, index2) {
            var aux = array[index1];
            array[index1] = array[index2];
            array[index2] = aux;
        };

        this.insert = function (item) {
            array.push(item);
        };

        /**
         * 冒泡排序
         * 
         * 大致思路：通過不斷地比較相鄰的兩個數，如果前面那個比後面那個大，則將這兩個位置的值對調；否則，不變。
         * 第一輪結束，可找到最大的數，並且被放到了最後；
         * 第二輪結束，可找到第二大的數，並且被放到了倒數第二位，以此類推。
         * 
         * 外層循環用於控制要執行的輪數，因為，一輪只能找到一個數并將其放到對於的位置。
         */
        this.bubbleSort = function () {
            var length = array.length;
            for (var i = 0; i < length; i++) {

                // 這裡-i主要是因為，經過i輪以後，i以後的位置已經是排序好的，不需要再比較
                for (var j = 0; j < length - 1 - i; j++) {
                    if (array[j] > array[j + 1]) {
                        swap(j, j + 1);
                    }
                }
            }
        };

        /**
         * 选择排序
         * 
         * 大致思路：找到最小的数，将它放到第一位，紧接着，找到第二小的数，将它放到第二位，以此类推。
         * 
         * 第一轮 从第一个数开始，先假设它就是最小的那个数，然后，将它依次与其他的数进行比较
         * 如果找到，比它更小的数，则将两个位置的值对调；否则，不变。
         * 第二轮 从第二个数开始，重复上面的过程，直至最后一个数。
         * 
         */
        this.selectionSort = function () {
            var length = array.length;
            var minIndex;

            // 這裡是length-1而不是length，主要是因為循環到了最後一個肯定是最大的
            for (var i = 0; i < length - 1; i++) {
                minIndex = i;
                for (var j = i; j < length; j++) {
                    if (array[j] < array[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    swap(i, minIndex);
                }
            }
        };

        /**
         * 插入排序
         * 
         * 将数组分成已排序和未排序两部分，不断的从未排序的部分里边选取一个数，插入到前面已经排序的序列中的合适的位置上，直到全部插完为止。
         * 简单来说，就是：数组不断的向后移动，找到合适位置后插入。
         * 
         * 外轮循环不断的取未排序部分里选取一个数（temp），通过，不断的与已排序过的序列的里项进行比较。
         * 先从序列的末尾开始，如果选取的值比它的前一项小，则先将前一项的值放到temp的位置，然后，从末尾的第二项开始
         * 重复以上的操作，直到找到比它(temp)大的数为止。
         * 
         * 已经排序过的序列的初始长度（j）为1，这里假设第一项是已经排序过的，因此，先从第二项开始，
         * 
         */
        this.insertionSort = function () {
            var length = array.length;
            var temp;
            var j;
            for (var i = 1; i < length; i++) {
                j = i;
                temp = array[i];
                while (array[j - 1] > temp) {
                    array[j] = array[j - 1];
                    j--;
                }
                array[j] = temp;
            }
        };

        /**
         * 归并排序
         * 
         * 将原始数组切分成较小的数组，直到每个小数组只有一个元素，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
         * 
         * 不断地将未排序的序列分成2个小数组，直到每个小数组只有一个元素，然后开始合并并且返回排序后数组。
         * 合并的时候：比较a[i]和b[j]的大小，若a[i]≤b[j]，则将a[i]放到result结果数组中，同时i的值加1；否则，将b[j]放到结果数组中，同时j的值加1。
         * 以此类推，直到有一个数组的元素被取完。然后，将另外个序列里的元素放到结果数组中。
         * 
         */
        this.mergeSort = function () {

            var merge = function (left, right) {
                var result = [];
                var il = 0;
                var ir = 0;
                while (il < left.length && ir < right.length) {
                    if (left[il] < right[ir]) {
                        result.push(left[il++]);
                    } else {
                        result.push(right[ir++]);
                    }
                }
                while (il < left.length) {
                    result.push(left[il++]);
                }
                while (ir < right.length) {
                    result.push(right[ir++]);
                }
                console.log('resutl:' + result);
                return result;
            };

            var mergeSortRec = function (array) {
                var length = array.length;
                if (length === 1) {
                    return array;
                }
                var mid = Math.floor(length / 2);
                var left = array.slice(0, mid);
                var right = array.slice(mid, length);
                console.log(left, right);
                return merge(mergeSortRec(left), mergeSortRec(right));
            };

            array = mergeSortRec(array);
        };

        /**
         * 将每一个数据结构中的元素和我们要找的元素做比较，直到找到指定元素为止。
         */
        this.sequentialSearch = function (value) {
            console.time('sequentialSearch');
            for (var i = 0, j = array.length; i < j; i++) {
                if (array[i] === value) {
                    console.timeEnd('sequentialSearch');
                    return i;
                }
            }
            console.timeEnd('sequentialSearch');
            return -1;
        };

        /**
         * 二分搜索
         * 
         * 基本思想是将n个元素分成大致相等的两部分，取a[n/2]与x做比较，
         * 如果x=a[n/2],则找到x,算法中止；
         * 如果x<a[n/2],则只要在数组a的左半部分继续搜索x，如果x>a[n/2],则只要在数组a的右半部搜索x。
         * 
         */
        this.binarySearch = function (value) {
            console.time('binarySearch');
            this.selectionSort();
            var max = array.length - 1;
            var min = 0;
            var mid = 0;

            while (min < max) {
                mid = Math.floor((max + min) / 2);
                if (value > array[mid]) {
                    min = mid + 1;
                }
                else if (value < array[mid]) {
                    max = mid - 1;
                }
                else {
                    console.timeEnd('binarySearch');
                    return mid;
                }
            }
            console.timeEnd('binarySearch');
            return -1;
        };

        this.toString = function () {
            return array.join();
        };
    }

    return ArrayList;
});