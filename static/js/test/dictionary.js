require(['../lib/structure/Dictionary'],
  function (Dictionary) {

    var s = new Dictionary();


    s.set('Gandalf', 'gandalf@email.com');
    s.set('John', 'johnsnow@email.com');
    s.set('Tyrion', 'tyrion@email.com').print();

    console.log(s.size());
    s.remove('Gandalf');
    console.log(s.size());

    console.log(s.get('yex'));
    s.remove('yex');
    console.log(s.size());

    console.log(s.keys());
    console.log(s.values());

    console.log(s.size());

    console.log(s.clear().size());
  });