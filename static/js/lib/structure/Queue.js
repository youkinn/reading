/**
 * 一般队列
 * 
 */
function Queue() {
}

Queue.prototype = {
  items: [],
  enqueue: function (element) {
    this.items.push(element);
  },
  dequeue: function () {
    return this.items.shift();
  },
  front: function () {
    return this.items[0];
  },
  isEmpty: function () {
    return this.items.length == 0;
  },
  size: function () {
    return this.items.length;
  },
  print: function () {
    console.log(this.items.toString());
  }
};

/**
 * 继承
 * 
 * @param {any} subClass 子类
 * @param {any} superClass 父类
 */
function extend(subClass, superClass) {
  var F = function () { };
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superclass = superClass.prototype;
  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

/**
 * 优先队列
 * 
 */
function PriorityQueue() {

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    priority = priority || 0;
    var queueElement = new QueueElement(element, priority);
    if (this.isEmpty() || !priority) {
      this.items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0, j = this.items.length; i < j; i++) {
        if (queueElement.priority > this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
        if (!added) {
          this.items.push(queueElement);
        }
      }
    }
  }

  this.print = function () {

    var item = {};
    for (var i = 0, j = this.items.length; i < j; i++) {
      item = this.items[i];
      console.log(item.element, item.priority);
    }
  };
}

extend(PriorityQueue, Queue);

function startGame(players, num) {
  var queue = new Queue();
  for (var i = 0, j = players.length; i < j; i++) {
    queue.enqueue(players[i]);
  }

  var winner = '';
  var eliminated = '';
  var current = 1;
  while (queue.size() > 1) {
    eliminated = '';
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log('第' + current + '轮' + eliminated + '被淘汰');
    current++;
  }
  return queue.front();
}

var players = ['yex', 'yew', 'qq'];
var winner = startGame(players, 10);
console.log('恭喜' + winner + '获得了胜利');