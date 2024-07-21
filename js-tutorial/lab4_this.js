// Example demonstrating different types of 'this' binding

// Object with a method that uses 'this'
const staff = {
    _id: 1001,
    name: 'Vishwas',
    sayMyname: function() {
        console.log(`My name is ${this.name}`); // 'this' refers to the 'staff' object
    }
};

// Implicit Binding
staff.sayMyname(); // Outputs: My name is Vishwas

/*
Implicit Binding:
- When a function is called as a method of an object, 'this' refers to the object before the dot.
- In 'staff.sayMyname()', 'this' refers to the 'staff' object.
*/

// Function to demonstrate explicit binding
function sayMyid() {
    console.log(`My id: ${this._id}`); // 'this' will be explicitly set using 'call' or 'apply'
}

// Explicit Binding using 'call'
sayMyid.call(staff); // Outputs: My id: 1001

/*
Explicit Binding:
- Functions in JavaScript can have their 'this' context explicitly set using 'call', 'apply', or 'bind'.
- 'call' and 'apply' immediately invoke the function with 'this' set to the specified object.
- In 'sayMyid.call(staff)', 'this' is explicitly set to refer to the 'staff' object.
*/

// Without explicit binding, 'this' refers to the global object (or undefined in strict mode)
sayMyid(); // Outputs: My id: undefined

// Setting a global variable to demonstrate default binding
globalThis._id = 1234; // In a browser, use 'window._id'
sayMyid(); // Outputs: My id: 1234

/*
Default Binding:
- When a function is called without an object context, 'this' refers to the global object (or undefined in strict mode).
- In Node.js, the global object is 'globalThis'; in browsers, it's 'window'.
- By setting 'globalThis._id', we can see that 'sayMyid()' uses the global 'this'.
*/

// Constructor function to demonstrate 'new' binding
function Person(name) {
    this.name = name; // 'this' refers to the newly created object
}

let p1 = new Person("Batman"); // Creates a new object 'p1' with 'this' bound to it
let p2 = new Person("Spiderman"); // Creates a new object 'p2' with 'this' bound to it

console.log(p1.name, p2.name); // Outputs: Batman Spiderman

/*
'new' Binding:
- When a function is invoked with the 'new' keyword, 'this' inside the function refers to the newly created object.
- In 'let p1 = new Person("Batman")', 'this' is bound to the new object 'p1'.
- Similarly, 'this' is bound to 'p2' in 'let p2 = new Person("Spiderman")'.
*/

// Summary of 'this' binding:
// 1. Implicit Binding: 'this' refers to the object before the dot when calling a method.
// 2. Explicit Binding: 'this' can be explicitly set using 'call', 'apply', or 'bind'.
// 3. Default Binding: 'this' refers to the global object when no explicit context is provided.
// 4. 'new' Binding: 'this' refers to the newly created object when a function is called with the 'new' keyword.
