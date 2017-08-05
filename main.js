require(['./static/js/lib/structure/DoublyLinkedList', './static/js/lib/structure/DoublyLinkedList2'],
  function (DoublyLinkedList, DoublyLinkedList2) {

    var dl = new DoublyLinkedList();
    dl.append('广州');
    dl.append('温州');
    dl.insert(0, '杭州');
    dl.append('台州');
    dl.insert(0, '上海');
    dl.insert(0, '北京');
    dl.print();
    dl.removeAt(2).print();
    dl.remove('台州').print();
    dl.removeAt(3).print( );
    dl.remove('北京').print();
    dl.remove('上海').print();
    dl.removeAt(0).print();
    dl.insert(0, '北京');
    dl.insert(0, '上海');
    dl.insert(0, '广州');
    dl.insert(0, '杭州');
    dl.insert(0, '台北');
    dl.print();
    dl.removeAt(0).print();
    dl.removeAt(0).print();
    dl.removeAt(0).print();
    dl.removeAt(0).print();
    dl.removeAt(0).print();
  });