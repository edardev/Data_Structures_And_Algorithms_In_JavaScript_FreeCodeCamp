/* Queue */
// Queue is first in and first out, opposite to Stacks.

function Queue() {
  collection = [];
  this.print = () => console.log(collection);
  this.enqueue = (element) => collection.push(element);
  this.dequeue = () => collection.shift(); // the shift() method, removes the first element from an array and returns that removed element.
  this.front = () => collection[0];
  this.size = () => collection.length;
  this.isEmpty = () => collection.length === 0;
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
console.log("q.size: ", q.size());
console.log("q.dequeue(): ", q.dequeue());
console.log("q.front(): ", q.front());
q.print();
q.isEmpty();

function PriorityQueue() {
  var collection = [];
  this.print = () => collection;
  this.isEmpty = () => collection.length === 0;

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        // checking priorities
        if (element[1] < collection[i][1]) {
          // splice(start, deleteCount)
          // splice(start, deleteCount, item1)
          // splice(start, deleteCount, item1, item2, itemN)
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = () => {
    var value = collection.shift();
    return value;
  };
  this.size = () => collection.length;
  this.front = () => collection[0];
}

var pq = new PriorityQueue();
pq.enqueue(["Edisson", 2]);
pq.enqueue(["Edwin", 3]);
pq.enqueue(["Edward", 1]);
pq.enqueue(["Felix", 1]);
pq.enqueue(["Sandra", 1]);

console.log("pq.print();: ", pq.print());
console.log("pq.size: ", pq.size());
console.log("pq.dequeue(): ", pq.dequeue());
console.log("pq.front(): ", pq.front());
console.log("pq.print();: ", pq.print());
pq.isEmpty();
