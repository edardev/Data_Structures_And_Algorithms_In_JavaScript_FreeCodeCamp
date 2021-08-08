/* Sets */
/* 
ES6 has a built-in Set but does not contain all the methods that are common in a Set, you might need to implement them yourself.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

Sets are a new object type with ES6 (ES2015) that allow creating collections of unique values. 
The values in a set can be either simple primitives like strings or integers as well as more complex object types like object literals or arrays.
*/
function mySet() {
  // the var collection will hold the set
  var collection = [];
  // this method will check for presence of an element and return true or false.
  this.has = function (element) {
    return collection.indexOf(element) !== -1; // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  };

  // this method returns the values in the the set
  this.values = () => collection;

  // this method will add an element in the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // In ES6 this method is called remove()
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1); //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
      return element + " was removed";
    }
    return false;
  };

  // size() is not method in the ES6 implementation but it is a property, ex: set.size instead of set.size()
  this.size = () => collection.length;

  /* The following methods are not included in the ES6 implementation of Sets but are often included in Sets */

  // this method will return the union of two sets.
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
      return differenceSet;
    });
  };

  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setA.add("Edward"));
console.log(setA.values());
console.log(setA.remove("a"));
console.log(setA.values());

// ES6 Set method
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");

console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
