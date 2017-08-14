require([], function (BinarySearchTree) {
    /**
     * 斐波那契数列
     * 
     * @param {any} n 
     * @returns 第n项的斐波那契数
     */
    function factorial(n) {
        if (n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    // console.log(factorial(7));


    /**
     * 阶乘
     * 
     * @param {any} n 
     * @returns !n
     */
    function fibonacci(n) {
        if (n === 1 || n === 2) {
            return 1;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }


    /**
     * 金额找零
     * 
     * @param {any} price 金额
     * @param {any} values 货币面额
     * @returns 各种面额的数量
     */
    function change(price, values) {
        var index = values.length - 1;
        var result = {};
        return step(price, values[index]);

        function step(curPrice, value) {
            result[value] = parseInt(curPrice / value);
            curPrice = curPrice % value;
            if (curPrice === 0 || index === 0) {
                return result;
            }
            return step(curPrice, values[--index]);
        }
    }
    var values = [1, 2, 5, 10, 50, 100];
    console.log(change(100, values));

});