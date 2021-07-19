# Scope

Global variables live until the page is discarded, like when you navigate to another page or close the window.

Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

---

# Hoisting

Whatever is being hoisted is being moved to the top
1. Variable hoisting
key thing to note is that the only thing that gets moved to the top is the 
**variable declarations** , not the actual value given to the variable.

```javascript
console.log(myName); //undefined
var myName="Lise";

console.log(myName); //Uncaught ReferenceError: myName is not defined
let myName="Lise";

console.log(myName); // Uncaught ReferenceError: Cannot access 'myName' before initialization
const myName="Lise";
```
In JavaScript, it is possible to use a function before it is declared

---

# Self invoking function

runs as soon as it is defined. 

Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

---

# Nested function

In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

## Note
When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.


Lexical scope is the ability for a function scope to access variables from the parent scope.
---

# Closure
Declare a function inside another function. 
The inner function remembers the environment it was created in.
If we have a variable in the outer function, that increments in the outer function -> the inner function remembers

**A closure is a function having access to the parent scope even after a parent function has closed**

This environment consists of any local variables that were in-scope at the time the closure was created. 


```javascript
function outer (){
	let num = 0;

	function inner(){
		num ++ //num = num + 1
		return `the number is ${num}`;
	}

	return inner
};

let outerFunc = outer(); 
console.log("outerfunc = ", outerFunc) //return the instance of th reference of the inner function
outerFunc(); //num = 1
console.log(outerFunc()); //num = 2
```

In this case, the outer function returns a reference to the instance of the inner function that is created when outer function is run. 
The instance of the inner function maintains a reference to its lexical environment, within which the variable *num* exists. For this reason, when `outerFunc()` is invoked, the variable *num* remains available for use.

It is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code. They also provide a powerful way of managing your global namespace.

---