# Array Methods:
- Array.prototype.push()
  - Adds one or more elements to the end of an array, and returns the new length of the array.
- Array.prototype.pop()
  - Removes the last element from an array and returns that element.
- Array.prototype.shift()
  - Removes the first element from an array and returns that element.
- Array.prototype.unshift()
  - Adds one or more elements to the front of an array, and returns the new length of the array.
# Creating an Array :
- Array literal
  - let myLiteralArray = [idx0, idx1, idx2, idxN…]
- Array constructor
  - let myArrayConstructor = new Array(idx0, idx1, idx2, idxN)
- Access the items in an array by index:
  - You access the items in the array by their index position.
    EX: if I had an array with a length of 7 
    let students = [Lindsey, Storm, Jordan, Michael, Zion,Curtrick, Tyler]
    Each item has an index associated with it. The items in an array are key value pairs
    
    0 
    Lindsey
    1
    Storm
    2
    Jordan
    3
    Micheal
    4
    Zion
    5
    Curtrick
    6
    Tyler

    You can clearly see that each item has a key associated with the value. To access the specific item we use bracket notation
    So we say : 
    1.I want the 2nd student in the students array: So that is index position 1.
    2. We write the name of the array followed by brackets. Inside the bracket is the index position of the student we want:                                        
    students[1] : this will return the item that is in index position 1 in the students array. 
    We can store this in a variable if we want to use it later in our code
    So we can say : let exampleStudent= students[1]
