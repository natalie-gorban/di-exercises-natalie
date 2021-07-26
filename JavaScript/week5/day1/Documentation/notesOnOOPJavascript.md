# this keyword

### What is this?

The JavaScript `this` keyword refers to **the object it belongs to**.

It has different values depending on where it is used:

* In a method, this refers to the owner object.
* Alone, this refers to the global object.
* In a function, this refers to the global object.
* In an event, this refers to the element that received the event.

---

### Global object

`window.variableName` means that the variable is being declared 
at the global scope. This means any JS code will have access 
to `this` variable. 

Using `window.` is not necessary but is frequently used 
as a **convention** to denote that a variable is global.

Global variables in JavaScript are attached to the "global object", 
which in a browser environment is aliased to `window object`.

global functions and variables declared with var (not let/const!) become the property of the global object.

---

### Arrow function

With normal functions the scoped is bound to the global one by default, so `this` refers to the window

arrows functions, do not have their own `this` but they inherit it from the parent scope, in this case the global one.

arrow functions don't bind their own scope, but inherit it from the parent one, which in this case is window or the global object.

---

### Object

```javascript
const count = {
    counter: "x",
    next: function () { 
        console.log(this) //{counter: "x", next: ƒ}
    		console.log(this.counter) //x
    	}
};

count.next()
```

---

# What is Object Oriented Programming?

**Grouping related information together to form a class structure makes the code shorter and easier to maintain.**

Object Oriented programming (OOP) is a **programming paradigm that relies on the concept of classes and objects**. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

* A class is an abstract blueprint used to create more specific, concrete objects.
	* Classes often represent broad categories, like Car or Dog that share attributes like age, color, power...
	* Classes can also contain functions, called **methods** available only to objects of that type. These functions are defined within the class and perform some action helpful to that specific type of object.

<u>Example</u>

`Car` class may have a method **repaint** that changes the color **attribute** of our car. This function is only helpful to objects of type `Car`, so we declare it within the Car class thus making it a **method**.

* Class templates are used as a blueprint to create individual objects.

Example

`Car`: to contain all the properties a car must have, color, brand, and model. We then create an **instance of** a `Car` type object, `myCar` to represent my specific car.

We could then set the value of the properties defined in the class to describe my car, without affecting other objects or the class template.

JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP).


![](pichere)

---

## Benefits of OOP

* OOP models complex things as reproducible, simple structures
* Reusable, OOP objects can be used across programs
* Easier to debug, classes often contain all applicable information to them
* Secure, protects information through encapsulation

---

# Object-oriented JavaScript (OOJS)

The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

## Object's prototype

JavaScript isn't a classed-based language – it's is a prototype-based language.
All objects have access to the `Object's prototype`. They do not possess these properties, but are granted access to the properties in the prototype.

---

## Classes

JavaScript introduced the class keyword in ECMAScript 2015. It makes JavaScript seem like an OOP language. 

---

Example

1. Create a parent class for all dogs as a blueprint of information and behaviors (methods) that all dogs will have, regardless of type.

2. Create child classes to represent different subcategories of dog under the generic parent blueprint.

3. Add unique attributes and behaviors to the child classes to represent differences

4. Create objects from the child class that represent dogs within that subgroup

---

# OOP Notions

## Attribute

Attributes are the information that is stored. Attributes are defined in the Class template.

---

## Method
Methods represent behaviors. Methods perform actions; methods might return information about an object, or update an object’s data. The method’s code is defined in the class definition.

---

## Constructor

The constructor method is a special method of a class for **creating and initializing an object of that class**.

A constructor enables you to provide any custom initialization that must be **done before** any other methods can be called on an instantiated object.
A constructor function is initialized with a number of parameters, which would be assigned as properties of `this`, referring to the function itself.

Object constructor is the same as a regular function. It will be called each time an object is created.

---

## new

The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.



```javascript
class Character {
  constructor(wizardname, wizardhouse, isWizardGoodStudent) {
    this.name = wizardname;
    this.house = wizardhouse;
    this.goodstudent = isWizardGoodStudent;
  }

  greeting(sentence="hohoho") {
   return `Hello everyone, my name is ${this.name}, my favorite sentence is ${sentence}`
  }
}

//instance of the class Character
const goodWizard = new Character("Hermione", "Gryfindor", true);
console.log(goodWizard.name)
console.log(goodWizard.greeting("abracadabra"))
```
---

## getter

The get syntax binds an object property to a function that will be called when that property is looked up.

---

## setter

The set syntax binds an object property to a function to be called when there is an attempt to set that property.

In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property.

---

## Subclassing

This is a feature in OOP where a class inherits features from a parent class but possesses extra features which the parent doesn't.

---

## super

The super keyword refers to the parent class

The super keyword is used to access and call functions on an object's parent.
By calling the `super()` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods

```javascript
class Character {
  constructor(wizardname, wizardhouse, isWizardGoodStudent) {
    this.name = wizardname;
    this.house = wizardhouse;
    this.goodstudent = isWizardGoodStudent;
    this.friends = ["Harry", "Hagrid"];
  }

  greeting(sentence="hohoho") {
  	return `Hello everyone, my name is ${this.name}, my favorite sentence is ${sentence}`
  }
}

class MainCharacter extends Character {
	  constructor(wizardname, wizardhouse, isWizardGoodStudent, money) {
        super(wizardname, wizardhouse);
        this.earnMoney = money;
    }

    showingOff() {
        return `I have ${this.earnMoney} - I'm rich`;
    }

    greeting() {
    	console.log(super.greeting("abracadabra"))
  		return `I don't greet anyone because I'm rich`
  	}
}

const goodWizard = new MainCharacter("Hermione", "Gryfindor", true, 10000);
console.log(goodWizard);
console.log(goodWizard.greeting())
```