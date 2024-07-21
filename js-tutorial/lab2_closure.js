function outer() {
    let a = 20; // 'a' is a local variable to the function 'outer'
    
    function inner() {
        a++; // Increment the local variable 'a'
        console.log(a); // Log the updated value of 'a'
    }
    
    inner(); // Call the 'inner' function, which has access to 'a' from its lexical scope
}

outer(); // Outputs: 21
outer(); // Outputs: 21
outer(); // Outputs: 21

/*
Each time 'outer' is called, a new execution context is created with its own 'a' variable.
The 'inner' function accesses and modifies this 'a' variable each time it is called within 'outer'.
Since 'a' is reinitialized to 20 every time 'outer' is called, the output is always 21.
*/


function OUTER() {
    let a = 5; // 'a' is a local variable to the function 'OUTER'
    
    function inner() {
        a++; // Increment the local variable 'a'
        console.log(a); // Log the updated value of 'a'
    }
    
    return inner; // Return the 'inner' function
}

let fn = OUTER(); // 'fn' now holds a reference to the 'inner' function with its closure over 'a'
fn(); // Outputs: 6
fn(); // Outputs: 7

/*
When 'OUTER' is called, it returns the 'inner' function. 
This 'inner' function maintains a reference to its lexical environment, 
which includes the variable 'a'. This reference is known as a closure.

The variable 'fn' holds this closure, so when 'fn' is called, 
it has access to the variable 'a' from the 'OUTER' function's scope. 
Each subsequent call to 'fn' increments and logs the same 'a' variable, 
demonstrating the concept of closure.
*/
