/* Stacks */

/* Methods in a stack: 
push = adds data on top of the stack. 
pop = removes the top element of the stack.
peek = displays the top element of the stack.
length or size = determines the length of the stack.
*/

/* Exercise
1. Check is a word is palindrome.
2. Implement a custom stack
Palindrome: A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, 
such as madam or racecar. There are also numeric palindromes, including date/time stamps using short digits 11/11/11 11:11 and 
long digits 02/02/2020.
*/

var letters = []; // this is our stack

function isPalindrome(word) {
  var reverse_word = "";

  //put letters of word into the stack
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  // pop off the stack in reverse order
  for (i = 0; i < word.length; i++) {
    reverse_word += letters.pop();
  }

  if (reverse_word === word) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not a palindrome");
  }
}
isPalindrome("racecar");
isPalindrome("Edward");

// Custom stack function

var Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds value onto of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => this.count;

  // Returns the value at the end of the stack but does not remove the item.
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

// Instance my custom Stack
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push("Edward");

console.log("myStack: ", myStack);
console.log("myStack.peek(): ", myStack.peek());
console.log("myStack.pop();: ", myStack.pop());
console.log("myStack.peek(): ", myStack.peek());
console.log("myStack.size(): ", myStack.size());
