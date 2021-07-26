# Object methods

All objects in JavaScript descend from the parent Object constructor. 

Object has many useful built-in methods 

---

# Object function

By default, the JavaScript provides the Object() function:

The Object.prototype object has many methods and properties such as toString() and valueOf().

The Object.prototype also has an important property called constructor that **references the Object() function**.

Object methods are used directly on the Object constructor, and 
**use the object instance as a parameter**.

---

## Object.keys()

Object.keys() creates an array containing the keys of an object. 

Object.keys is also useful for checking the length of an object.

```javascript
let character = {
	name: 'Hermione Granger',
	house: 'Gryfindor'
};

const length = Object.keys(character).length;

console.log(length);//2 (number of properties)
```

---

## Object.values()

Object.values() creates an array containing the values of an object.

---

## Object.entries()
Object.entries() creates a nested array of the key/value pairs of an object.

```javascript
let characters = {
	name: 'Hermione Granger',
	house: 'Gryfindor'
};

const details = Object.entries(characters);

console.log(details);
//
(2) [Array(2), Array(2)]
0: (2) ["name", "Hermione Granger"]
1: (2) ["house", "Gryfindor"]
```

---

## Object.getPrototypeOf()

Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.

---

### toString()

Every object has a toString() method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected. By default, the toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]", where type is the object type. 

---

# Spread

Object spread syntax within the object literal extracts from source objects own and enumerable properties, and copies them into the target object.

When multiple objects are spread and some properties have the same keys name, how do the final set of values is calculated? The rule is simple: Latter spread property overwrites earlier properties that have the same key

Object spread does a shallow copy of the object. Only the object itself is cloned, while nested instances are not cloned.

When JavaScript objects including arrays are deeply nested, the spread operator only copies the first level with a new reference, but the deeper values are still linked together.

```javascript
const coloredCircle = {
    ...circle,
    color: 'black'
};
```

---

## Object.assign()
Object.assign() is used to copy values from one object to another.

```javascript
Object.assign(target, ...sources)
```
The Object.assign() copies all enumerable and own properties from the source objects to the target object. It returns the target object.

Note that the Object.assign() only carries a shallow clone, not a deep clone.

---

## Destructuring

1. The basic syntax of object destructuring is pretty simple:

```javascript
const { identifier } = expression;
```

Where **identifier** is the **name of the property** to access and expression should evaluate to an object. After the destructuring, the variable identifier contains the property value.

```javascript
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { name, realName } = hero 
```

const { name, realName } = hero is an object destructuring assignment. This statement defines the variables name and realName, then assigns to them the values of properties hero.name and hero.realName correspondigly.

2. Extracting multiple properties

To destructure the object into multiple properties, enumerate as many properties as you like adding commas , in-between:

```javascript
const { identifier1, identifier2, ..., identifierN } = expression;
```

3. Default values

If the destructured object doesn’t have the property specified in the destructuring assignment, then the variable is assigned with undefined.

Fortunately, you can set a default value if the property doesn’t exist in the destructured object. Here’s the basic syntax:

```javascript
const { identifier = defaultValue } = expression;
```

4. Extracting properties from nested objects

Often objects can be nested in other objects. In other words, some properties can contain objects.

In such case, you still can use the object destructuring and access properties from deep. Here’s the basic syntax:

```javascript
const { nestedObjectProp: { identifier } } = expression;
```

nestedObjectProp is the name of the property that holds a nested object. identifier is the property name to access from the nested object. expression should evaluate to the destructured object.

```javascript
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham'
  }
};

// Object destructuring:
const { address: { city } } = hero;

city; // => 'Gotham'
```