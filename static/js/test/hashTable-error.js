require(['../lib/structure/HashTable'],
  function (HashTable) {

    var s = new HashTable();
    s.put('Gandalf', 'Gandalf@email.com');
    s.put('John', 'John@email.com');
    s.put('Tyrion', 'Tyrion@email.com');
    s.put('Aaron', 'Aaron@email.com');
    s.put('Donnie', 'Donnie@email.com');
    s.put('Ana', 'Ana@email.com');
    s.put('Jonathan', 'Jonathan@email.com');
    s.put('Jamie', 'Jamie@email.com');
    s.put('Sue', 'Sue@email.com');
    s.put('Mindy', 'Mindy@email.com');
    s.put('Paul', 'Paul@email.com');
    s.put('Nathan', 'Nathan@email.com');

    s.print();
  });