# JS primitives

```javascript
let username = "John";
```

--> username equals the memory address that holds the value "John".

### Steps

1. Create a unique identifier for your variable ("username").
2. Allocate an address in memory (will be assigned at runtime).
3. Store a value at the address allocated ("John").

![](https://miro.medium.com/max/1750/1*IiejRUFbks-TaOzJJvdoVw.jpeg)

## I. Create a new variable

```javascript
let username = "John";
let teacherName = username;
```

![](https://miro.medium.com/max/1750/1*AaUqtuwa2BZiI73bV9RHmA.jpeg)

## I. Change the value of the variable

```javascript
let username = "John";
let teacherName = username;

username = "Tom"
```

Primitive data types in JS are immutable, if the value of the `username` variable changes, JS will allocate a new address in memory, store "Tom" as its value, and `username` will point to the new address.

![](https://miro.medium.com/max/1750/1*awL1xpr8cDNV7AaxiaA7YQ.jpeg)

---

# JS non-primitives

```javascript
let myArray = []
```

### Steps

When you declare a variable “myArray” and assign it a non-primitive data type like “[]”, this is what happens in memory:

1. Create a unique identifier for your variable (“myArray”).
2. Allocate an address in memory (will be assigned at runtime).
3. Store a value of a memory address allocated on the heap (will be assigned at runtime).
4. The memory address on the heap stores the value assigned (the empty array []).

![](https://miro.medium.com/max/1750/1*CPnnVIgE0tQVbxIja_C-_A.jpeg)

## Change or add elements

```javascript
myArray.push("first")
myArray.push("second")
myArray.push("third")
myArray.push("fourth")
myArray.pop()
```

![](https://miro.medium.com/max/1750/1*XfqW2Xh5oJrChzhRAauf9Q.jpeg)

![](https://miro.medium.com/max/1750/1*rphzalOnHm5FseLVov498g.jpeg)
We push numbers onto the array that exists in the heap. However, the memory address of “myArray” has not changed.