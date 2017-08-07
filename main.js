require(['./static/js/lib/structure/Set'],
  function (Set) {

    var s = new Set();
    s.add(1);
    s.add('1').print();
  });