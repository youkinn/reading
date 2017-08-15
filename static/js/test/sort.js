require(['../lib/structure/ArrayList'], function (ArrayList) {
    function createNonSortedArray(size) {
        var array = new ArrayList();
        for (var i = size; i > 0; i--) {
            array.insert(i);
        }
        return array;
    }

    var array = createNonSortedArray(5);
    console.log(array.toString());
    array.bubbleSort();
    console.log(array.toString());
});