require(['../lib/structure/ArrayList'], function (ArrayList) {
    function createNonSortedArray(size) {
        var array = new ArrayList();
        // var temp = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
        // for (var i = size; i > 0; i--) {
        //     array.insert(i);
        // }
        return array;
    }

    array = createNonSortedArray(5);
    console.log(array.toString());
    array.mergeSort();
    console.log(array.toString());
});