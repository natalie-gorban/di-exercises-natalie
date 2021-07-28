# Promise object

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

Since JavaScript code runs in a non-blocking manner, promises become essential when we have to wait for some asynchronous operation without holding back the execution of the rest of the code.

---

# Promise states

A Promise is an object. There are 3 states of the Promise object:

* Pending: Initial State, before the Promise succeeds or fails

* Resolved: Completed Promise

* Rejected: Failed Promise

![](https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png)

For example, 

* when we request data from the server by using a Promise, it will be in pending mode until we receive our data.

* If we achieve to get the information from the server, the Promise will be resolved successfully. 

* But if we don’t get the information, then the Promise will be in the rejected state.


---

# Asynchronous operations

In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.

Because the value will be returned by the promise in the future, the promise is very well-suited for handling asynchronous operations.

A promise starts in the pending state which indicates that the promise hasn’t completed. It ends with either fulfilled (successful) or rejected (failed) state.

---

# Promise constructor

```javascript
new Promise(executor)
```

**executor** : A **function** to be executed by the constructor, during the process of constructing the new Promise object. The executor is custom code that ties an outcome to a promise.

```javascript
function(resolutionFunc, rejectionFunc){
      // typically, some asynchronous operation.
}
```

`resolutionFunc` and `rejectionFunc` are also functions, and you can give them whatever actual names you want. Their signatures are simple: they accept a single parameter of any type.

```javascript
resolutionFunc(value) // call on resolved
rejectionFunc(reason) // call on rejected
```

And so, given all the above, here’s a summary of the typical flow:

1. The operation within executor is asynchronous and provides a callback.

2. The callback is defined within the executor code.

3. The callback terminates by invoking resolutionFunc.

4. The invocation of resolutionFunc includes a value parameter.

5. The value is passed back to the Promise object.

6. The Promise object (asynchronously) invokes any associated `.then(handleResolved)`.

7. The value received by `.then(handleResolved)` is passed to the invocation of handleResolved as an input parameter (see Chained Promises).

---

# Creating a new Promise

A Promise object is created using the new keyword and its constructor. 

This constructor takes a function, called the "executor function", as its parameter. 

This function should take two functions as parameters. 

* The first of these functions (resolve) is called when the asynchronous task completes successfully and returns the results of the task as a value. 

* The second (reject) is called when the task fails, and returns the reason for failure, which is typically an error object.

![promises](https://www.javascripttutorial.net/wp-content/uploads/2020/03/JavaScript-Promise-state.png)

If the promise reaches fulfilled state or rejected state, the promise is resolved -> a promise cannot go from the fulfilled state to the rejected state and vice versa. It also cannot go back from the fulfilled state or rejected state to the pending state.

---

## Consuming a Promise: then, catch, finally

1. The `then()` method

The then() method is used to schedule a callback to be executed when the promise is successfully resolved. It gets a callback function

2. The `catch()` method

If you want to schedule a callback to be executed when the promise is rejected, you can use the catch() method of the Promise object.  It gets a callback function

3. The `finally()` method

Sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected.

---

## Chained Promises

```javascript
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

The methods `promise.then()`, `promise.catch()`, and `promise.finally()` are used to associate further action with a promise that becomes settled.

The `.then()` method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, 

```javascript
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
```

![promises](C:\Users\nakac\OneDrive\Documents\Sessions DI\Advanced Javascript - Week5\Week5Day3\pics\promises.png)

callback hell : https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/

cheatsheet: https://www.codecademy.com/learn/introduction-to-javascript/modules/javascript-promises/cheatsheet