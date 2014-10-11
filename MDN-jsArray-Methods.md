#JavaScript Array Methods

##Methods

``Array.from()`` - creates a new array from an array-like object (lists, strings, maps, etc)
    ```
    Array.from("IronYard"); // returns ["I", "r", "o", "n", "Y", "a", "r", "d"]
    ```

``Array.isArray()`` - checks to see if an object is an array. Returns ``true`` if yes, ``false`` if no.
  ```
  Array.isArray([]); // returns true
  Array.isArray([4,2,6]) // true
  Array.isArray('Atom IDE') // false
  ```

``Array.of()`` - creates a new array from a variable number of arguments, regardless of the type of argument.

Not entirely sure how this is different from Array.from...

  ```
  Array.of(1,2,3) // returns [1,2,3]
  Array.of(undefined) // returns [undefined]
  ```

## Array Instances

### Properties

``Array.protoype.length`` - returns the length of the number of elements in an array.

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

``Array.protoype.copyWithin()`` - Alright. This one can get complicated. So you have an array. And for some reason,
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

``Array.prototype.fill()`` - fills all the elements of an established array with new values, at given points

arr.fil(value, start, end) - value: the thing you're inserting, start: the starting element you're replacing,
end: the last established element you're replacing

  ```
