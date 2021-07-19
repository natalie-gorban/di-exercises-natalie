# The Memory

## Garbage Collector

JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (*garbage collection*). This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.

Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as [garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

**The engine allocates memory and frees it up once we don't need it anymore.**

---

## I. Memory life cycle

![](https://felixgerschau.com/static/87cb911a5bdda814cdc38a1679e327e5/599ea/memory-life-cycle.png)

1. **Allocate memory** — memory is allocated by the operating system which allows your program to use it. 

2. **Use memory —** this is the time when your program actually makes use of the previously allocated memory. **Read** and **write** operations are taking place as you’re using the allocated variables in your code.

3. **Release memory** — now is the time to release the entire memory that you don’t need so that it can become free and available again. As with the **Allocate memory** operation, this one is explicit in low-level languages.

---

## II. Value initialization

In order to not bother the programmer with allocations, JavaScript will automatically <u>allocate (affecte) memory when values are initially declared.</u>

```
var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string
```

- When the statement `var a = 10` is encountered, a location in the memory is assigned to store the value of `a`.
- JavaScript provides the feature of automatic garbage collection. Once the object/variable is out of context and will not be of use anymore, it’s memory is reclaimed and returned to the free memory pool.

---

## III. Where data is stored?

JavaScript engines have two places where they can store data: The **memory heap** and **stack**.

### Stack: Static memory allocation

A stack is a data structure that JavaScript uses to store static data. 
Static data is data where the engine knows the size at compile time. 

In JavaScript, this includes **primitive values** (strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.

![](https://felixgerschau.com/static/b94165593eb6e02d73039d8b2cfccfdd/437e0/stack-memory-explained.png)

### Heap: Dynamic memory allocation

The heap is a different space for storing data where JavaScript stores objects and functions.

Unlike the stack, the engine doesn't allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed.

### References in JavaScript

All variables first point to the stack. In case it's a non-primitive value, the stack contains a reference to the object in the heap.

![](https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/437e0/stack-heap-pointers.png)

![](https://felixgerschau.com/video/stack-heap-gc-animation.mp4)

---

## IV. Memory Leaks

Memory leaks are parts of memory that the application needed and used in the past and it is not needed anymore but its storage is yet not returned to the memory pool.

---

## V. How to avoid memory leaks

### A. **Global variables:** 

If you keep creating global variables, they will stick around throughout the execution of the program even if they are not needed. If these variables are deeply nested objects, a lot of memory is wasted.

```
var a = { ... }
var b = { ... }
function hello() {
  c = a;  // this is the global variable that you aren't aware of.
}
```

If you try to access a variable which was not declared previously, you will create a variable in the global scope. In the above example, ‘c’ is that variable/object that you didn’t implicitly create using the ‘var’ keyword. (**IMPORTANT**)

To release memory, assign the global variable to null.

```javascript
window.users = null;
```


### B. Intervals and Timeouts: 

When referencing objects inside these closures, the garbage collector will never clear the objects until the closure themselves are cleared.

```
setInterval(() => {
  // reference objects
}
// now forget to clear the interval.
// you just created a memory leak!
```

