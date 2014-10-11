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

``Array.protoype.copyWithin()``
