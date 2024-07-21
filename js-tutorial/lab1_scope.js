let a = 10; // 'a' is a global variable, accessible anywhere in the code

function outer() {
    let b = 20; // 'b' is a local variable to the function 'outer', accessible only within 'outer' and its inner functions
    
    function inner() {
        let c = 30; // 'c' is a local variable to the function 'inner', accessible only within 'inner'
        console.log(a, b, c); // Logs the values of 'a', 'b', and 'c'
    }
    
    inner(); // Call the 'inner' function, which has access to 'a', 'b', and 'c' due to the scope chain
}

outer(); // Outputs: 10 20 30

/*
Scope:
- Scope determines the accessibility of variables and functions at various parts of the code.
- There are three main types of scope in JavaScript: global scope, function scope, and block scope.

Global Scope:
- Variables declared outside any function have global scope.
- They can be accessed from anywhere in the code.

Function Scope:
- Variables declared inside a function are local to that function.
- They can be accessed only within that function and its inner functions.

Block Scope (not demonstrated in this example but important):
- Variables declared with 'let' or 'const' inside a block (e.g., inside a loop or if statement) are local to that block.
- They cannot be accessed outside the block.

In this code:
- 'a' is a global variable and can be accessed anywhere, including inside 'outer' and 'inner'.
- 'b' is a local variable to 'outer' and can be accessed only inside 'outer' and 'inner' (due to the scope chain).
- 'c' is a local variable to 'inner' and can be accessed only inside 'inner'.

Scope Chain:
- When a variable is accessed, JavaScript first looks in the local scope.
- If the variable is not found, it looks in the outer scope, continuing until it reaches the global scope.
- If the variable is still not found, a ReferenceError is thrown.

In the 'inner' function:
- It can access 'c' because 'c' is local to 'inner'.
- It can access 'b' because 'b' is in the outer function 'outer'.
- It can access 'a' because 'a' is in the global scope.
- This is known as the scope chain.
*/
