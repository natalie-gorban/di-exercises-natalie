# Pure functions

We refer to functions that don’t affect anything in the outside scope as pure functions. As long as a function only takes primitive values as parameters and doesn’t use any variables in its surrounding scope, it is automatically pure, as it can’t affect anything in the outside scope. All variables created inside are garbage-collected as soon as the function returns.

Many native array functions, including Array.map and Array.filter, are therefore written as pure functions. They take in an array reference and internally, they copy the array and work with the copy instead of the original. This makes it so the original is untouched, the outer scope is unaffected, and we’re returned a reference to a brand new array.

---

# Map

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

```javascript
map((element, index, array) => { ... } )`
map(function callbackFn(element, index, array){ ... })
```

The Array.map() method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements.

Each time callbackFn executes, the returned value is added to newArray.

The Return value of the map method:
A new array with each element being the result of the callback function.

.map() is a non-mutating method that creates a new array as opposed to mutating methods, which only make changes to the calling array.

Difference with for each : The forEach() method executes a provided function once for each element in an array. After executing the function for every array element, this method changes the values of the existing array elements according to the result of the provided function. Hence forEach() is a mutator method. Also, forEach method doesn’t return anything (undefined).

---

# Filter

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

**Conditionaly return certain element from the array to a new array**

```javascript
filter(function callbackFn(element, index, array){ ... })
```

filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true.

Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.

The returned value of the filter method
A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

---

# Reduce

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

reducing an array to a value.

```javascript
reduce(function callbackFn(accumulator, currentValue, index, array){ ... })

reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)
```
 Accumulator : accumulate the value of each callback


Parameters

* callbackFn
A function to execute on each element in the array (except for the first, if no initialValue is supplied).

It takes four arguments:

* accumulator
The accumulator accumulates callbackFn's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).

* currentValue
The current element being processed in the array.

* index Optional
The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.

* array Optional The array reduce() was called upon.

* initialValue Optional
A value to use as the first argument to the first call of the callbackFn. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue.

---

# Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


---

# Spread operator

In JavaScript, spread syntax refers to the use of an ellipsis of three dots (…) to expand an iterable object into the list of arguments.

In ES6, you use the spread operator (...) to unpack elements of an array

## Clone  

<u>Goal:</u> to clone an object or merge objects into one.

```javascript
let colors = ['red', 'green', 'blue'];
let rgb = [...colors];
console.log(rgb);
```

In this example, the spread operator (...) unpacks elements of the colors array and places them in a new array rgb

## Merge

The spread operator (...) can be used to merge two or more arrays into one


```javascript
let rgb = [ 'red', 'green', 'blue' ];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
let merge = [...rgb, ...cmyk];
console.log(merge);
```


---

# Rest parameter

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,

The rest parameter collects all remaining arguments of a function into an array. The rest parameters **must be the last arguments of a function**. 
The dots literally mean “gather the remaining parameters into an array”.

```javascript
function f(a, b, ...args) {
	console.log(args);
}

f(1, 2, 3, 4, 5);
```

Here are the main differences:
	* The spread operator unpacks elements.
	* The rest parameter packs elements into an array. 

---

# Chaining array methods

Because the filter() method returns an a new array, you can chain the result with other iterative methods such as sort() and map().

[Beware of chaining array methods](https://www.freecodecamp.org/news/beware-of-chaining-array-methods-in-javascript-ef3983b60fbc/)