#JavaScript Array Methods

##Methods

1) ``Array.from()`` - creates a new array from an array-like object (lists, strings, maps, etc)
    ```
    Array.from("IronYard"); // returns ["I", "r", "o", "n", "Y", "a", "r", "d"]
    ```

2) ``Array.isArray()`` - checks to see if an object is an array. Returns ``true`` if yes, ``false`` if no.
  ```
  Array.isArray([]); // returns true
  Array.isArray([4,2,6]) // true
  Array.isArray('Atom IDE') // false
  ```

3) ``Array.of()`` - creates a new array from a variable number of arguments, regardless of the type of argument.

Not entirely sure how this is different from Array.from...

  ```
  Array.of(1,2,3) // returns [1,2,3]
  Array.of(undefined) // returns [undefined]
  ```

## Array Instances

### Properties

4) ``Array.protoype.length`` - returns the length of the number of elements in an array.

Important to note is the **number** of elements, not necessarily the number of characters/element.

  ```
  var numbers = [1,2,3,4]
  numbers.length //returns 4

  var things = ["stuff", "things"]
  things.length // returns 2
  ```

###Methods
####Mutator Methods
These will modify the array:

5) ``Array.protoype.copyWithin()`` - Alright. This one can get complicated. So you have an array. And for some reason,
you want to copy certain elements within the array to replace other elements inside of said array. This is where
you use array.copyWithin(target, start, end). The target is the location you are copying onto. Start is where
you start the element you're copying, and the copy runs all the way to the end of the array UNLESS you have an end.
The end is optional. If you have an end, the copied bits stop at this location. Example time!

  ```
  var colors = ["red", "blue", "yellow", "green", "pink"];

  colors.copyWithin(0,3) // returns ["green", "pink", "yellow", "green", "pink"]
  colors.copyWithin(0,2,4) // returns ["yellow","green", "yellow", "green", "pink"]
  colors.copyWithin(0,-2,-1) // returns ["green", "blue", "yellow", "green", "pink"]
  ```

6) ``Array.prototype.fill()`` - fills all the elements of an established array with new values, at given points

arr.fil(value, start, end) - value: the thing you're inserting, start: the starting element you're replacing,
end: the last established element you're replacing

  ```
  //borrowing the var colors array from the previous example:
  colors.fill(purple) // returns ["purple", "purple", "purple", "purple", "purple"]
  colors.fill("purple", 3) // returns ["red", "blue", "yellow", "purple", "purple"]
  colors.fill("purple", 2, 3) // returns ["red", "blue", "purple", "green", "pink"]
  ```

7) ``Array.prototype.pop()`` -- removes the last element in an array. Pop! Sounds violent.
  ```
  colors.pop() // if you console.log'd this, it'd be 'pink'
  ```

8) ``Array.prototype.push()`` - adds 1(+) elements to the end of an array
  ```
  colors.push("magenta") // returns ["red", "blue", "yellow", "green", "pink", "magenta"]
  ```

9) ``Array.prototype.reverse`` - reverses the order of elements in an array. [0] gets pushed to last, and vice versa.

  ```
  colors.reverse() // would return ["pinkt", "green", "yellow", "blue", "red"]
  ```


10) ``Array.prototype.shift()`` - kind of like the reverse of pop. array.shift will remove the first element
in an array.

  ```
  colors.shift() // colors will now be ["blue", "yellow", "green", "pink"].
  // .shift will return "red"
  ```

11) ``Array.protoype.sort()`` - This one I don't quite understand. Apparently it arranges the elements in an array
according to their unicode code point value. I guess I need to know what Unicode is to understand this.

Examples from the MDN site:
  ```
  var fruit = ['apples', 'bananas', 'Cherries'];
  fruit.sort(); //returns ['Cherries', 'apples', 'bananas']

  var scores = [1,2,10,21]
  scores.sort(); // returns [1, 10, 2, 21]
  ```

  Yeah...I don't know.


12) ``Array.prototype.splice()`` - changes the elements in an array by adding new ones and removing old ones.
Needs 3 inputs: (starting place where you're splicing to, how many elements you're removing, new elements you're
splicing in)

  ```
  //Good ole var colors!
  var colors = ["red", "blue", "yellow", "green", "pink"];
  colors.splice(1,0, "purple") // returns new colors: ["red", "purple", "yellow", "green", "pink"]
  colors.splice(3,1) // returns ["red", "blue", "yellow", "pink"]
  colors.splice(0,2, "purple", "burgundy") // returns ["puple", "magenta", "yellow", "green", "pink"]
  ```

13) ``Array.prototype.unshift()`` - Ooh...this one is cool. So the opposite of array.push, which adds elements to
the end of an array, array.unshift will add elements to the BEGINNING of an array. Neat!

  ```
  colors.unshift("robin's egg"); // returns ["robin's egg", "red", "blue", "yellow", "green", "pink"]
  ```

####Acessor Methods
Will not modify the array, but will return some representation of the array.

14) ``Array.prototype.concat()`` - Hmm another interesting and possibly useful one. This command can merge multiple arrays together
to form one super array.

  ```
  var colors = ['red', 'blue', 'green']
  var browsers = ['chrome', 'firefox', 'safari']
  var numbers = [1, 2, 3]

  var superArray = colors.concat(browsers, numbers)// returns ['red', 'blue', 'green', 'chrome', 'firefox', 'safari', 1, 2, 3]
  ```

15) ``Array.prototype.contains()`` - determines if an array contains a certain element, returns true or false
  ```
  var colors = ['red', 'blue', 'green']
  colors.contains('red') // returns true
  coolors.contains('yellow') // returns false
  colors.contains('red', 2) // false - the second input is fromIndex, tells the robot to search for the given value starting at the index specified.
                            // in this case, red is an element in colors, but the robot started searching from [2]. which is 'green'. So it's false.
  ```

16) ``Array.prototype.join()`` - takes the elements in an array and turns them into a string.
It is optional to include a separator like (',') which specifies how you want the values
separated when they're in string format. Examples will help.

    ```
    var colors = ['red', 'blue', 'green']
    colors.join(); // will return "red,blue,green"
    colors.join(', '); // will return "red, blue, green" (because of the specified space after the comma)
    colors.join(' + '); // returns "red + blue + green". Spaces count!
    ```

17) ``Array.prototype.slice();`` - returns a copied portion of an array in a new variable, given a start and end index. It's important
to note that .slice does not affect the original array, like .splice does. However, if the original array is altered,
the changes do reflect in whatever .slice command you've written.

  ```
  var fruits = ['apples', 'peaches', 'mangoes', 'grapes', 'strawberries'];
  var fruitPits = fruits.slice(1,3);
  console.log(fruits) // returns the original fruits array
  console.log(fruitPits) // returns ['peaches', 'mangoes'];
  ```

18) ```Array.prototype.toString`` - returns a string that represents the array in question and its elements.

  ```
  var browsers = ['chrome', 'firefox', 'opera'];
  browsers.toString(); // returns "chrome,firefox,opera"
  ```

19) ``Array.prototype.indexOf();`` - use this to find the index/location of an element in an array!

  ```
  var browsers again.
  browsers.indexOf('opera') // returns 2
  browsers.indexOf('safari') // returns -1. -1 is returned when the element you're searching for does not exist in the array.
  ```

20) ``Array.prototype.lastIndexOf();`` - will give you the last index location of an element in an array.
Could be useful for wanting to know what is the last location of a repeating element within an array.

  ```
  var numbers = [2,5,3,2,7]
  numbers.LastIndexOf(2); // returns index of 3.
  numbers.LastIndexOf(4); // returns -1, because like indexOf, if the element doesn't exist in the array, robot will return -1.
  ```

####Iteration Methods
Methods that will apply a function or action to each part of an array.

21) ``Array.prototype.forEach()`` - executes a function once to each element within an array.
3 Arguments:
* Element value
* element index
* the array in question
Example using the Conway's Game of Life problem:
  ```
  function conway (cell, neighbors) {
  var alive = 0;
  neighbors.forEach(function(neighbors){ //The .forEach method. Applies a function (the next line) to each of the elements in 'neighbors'
    if(neighbors === true){alive++};
  });

      if (cell === true){
        if (alive < 2){cellNew = false};
        if (alive === 2 || alive === 3){cellNew = true};
        if (alive > 3){cellNew = false};
        }
        else {if (alive ===3)
                {cellNew = true}
              else{cellNew = false}
              }
        return cellNew;

  } //END conway
  ```

22) ``Array.prototype.entries()`` using this will return a key of sorts, each
element and its corresponding index in the array. But apparently, to actually
print the index and its element requires a couple of other commands...?

  ```
  var arr = ['a', 'b', 'c'];
  var eArr = arr.entries();

  console.log(eArr.next().value); // returns [0, 'a']
  console.log(eArr.next().value); // returns [1, 'b']
  console.log(eArr.next().value); // returns [2, 'c']
  ```

23) ``Array.prototype.every()`` - determines whether the elements in an array
pass a test implemented by the provided function.

  format: ``arrary.every(<function>(<element being process>, <element's index>, array))``
  ```
  function isBigEnough(element, index, array) {
  return element >= 10;
  }
  var passed = [12, 5, 8, 130, 44].every(isBigEnough); // passed is false
  passed = [12, 54, 18, 130, 44].every(isBigEnough); // passed is true
  ```
24) ``Array.prototype.some()`` - like array.every, but more flexible when it comes to returning true.

  ```
  function isBigEnough(element, index, array){
    return element >= 10;
  }
  var passed = [2,5,8,1,4].some(isBigEnough); // false, because none of the elements satisfy isBigEnough
  passed = [12,5,8,1,4].some(isBigEnough); // true, because at least one element "12" satisfies isBigEnough

25) ``Array.prototype.filter()`` - creates a new array based on whatever criteria the function establishes.
Similar to array.every or array.some in terms of rule applying, but instead of a boolean, it spits out a new
array. Important to note that array.filter does not affect the original array in terms of adding/removing elements.

  ```
  function isBigEnough(element, index, array){
    return element >= 10;
  }

  var filtered = [12,5,8,130,44].filter(isBigEnough); // returns [12,130,44]
  ```

26) ``Array.prototype.find()`` - will return a value in an array provided it satisfies a given
testing function. Else, it returns undefined.
*Experimental command, may be subject to change in the future*

  ```
  function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
      }
    }
    return element > 1;
  }

  console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
  console.log([4, 5, 8, 12].find(isPrime)); // 5
  ```

27) ``Array.prototype.findIndex();`` - almost the same as array.find, except it will return the index
location of the element that satisfies whatever function argument applied.
*Experimental command, may be subject to change in the future*

  ```
  function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
      }
    }
    return element > 1;
  }

  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, because -1 is the response when none of the elements satisfies the function
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
  ```

28) ``Array.prototype.keys();`` - returns a new array iterator that tells the index location
for each element in an array.
*Experimental command, may be subject to change in the future*
  ```
  var arr = ['a', 'b', 'c'];
  var eArr = arr.keys();

  console.log(eArr.next().value); // 0
  console.log(eArr.next().value); // 1
  console.log(eArr.next().value); // 2
  ```

29) ``Array.prototype.map();`` - creates a new array with the results from applying a function to
each element in an established array. This sounds a lot like array.forEach, but the difference is
that forEach will affect the original array, while .map will make a new copy.

  ```
  var numbers = [4,9,25];
  console.log(numbers.map(Math.sqrt)); // returns [2,3,5]
  console.log(numbers) // returns [4,9,25], original array is unaffected
  ```

30) ``Array.prototype.reduce();`` - This one is hella confusing. So this command will apply a function
once to each element in the array, but operates specifically by applying previous and curent elements
to said function, and aggregating the results as the robot moves along the array, returning one value/
element at the end. Uh. Yeah. Examples?

  ```
  //formula/syntax:
  array.reduce(function(prev, curr){
    /**function stuff!**/
    })

  var numbers = [0,1,2,3,4];  
  numbers.reduce(function(previousValue, currentValue, index, numbers) {
  return previousValue + currentValue;
  });
      // in the first call, prev = 0, curr = 1, starting at numbers[0]. Returns 1.
      // 2nd call, prev =1, curr =2, at numbers[1]. returns 3.
      // 3rd call, prev = 3, curr = 3, at numbers[2]. returns 6.
      // 4th call, prev = 6, curr = 4, at numbers[3]. returns 10.

  //we can also asign a starting point/value on which .reduce can operate:

  numbers.reduce(function(previousValue, currentValue, index, numbers) {
  return previousValue + currentValue;
  }, 10);  // 10 is the initial value
      // 1st call, prev = 10 (initial), curr = 0, at numbers[0], returns 10.
      // 2nd call, prev = 10 (result from 1st call), curr = 1, at numbers[1], returns 11
      // 3rd call, prev = 11 (result from 2nd call), curr = 2, at numbers[2], returns 13
      // 4th call, prev = 13 (result from 3rd call), curr = 3, at numbers[3], returns 16
      // 5th call, prev = 16 (result from 4th call), curr = 4, at numbers[4], returns 20
  ```

31)``Array.prototype.reduceRight();`` - does the same thing as array.reduce, but starts
at the right side of the array instead of the left.

  ```
  [0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
  });
    // 1st call, prev = 4, curr = 3, index[3], returns 7
    // 2nd call, prev = 7, curr = 2, index[2], returns 9
    // 3rd call, prev = 9, curr = 1, index[1], returns 10
    // 4th call, prev = 10, curr = 0, index[0], returns 10
  ```
