
// Standard function to multiply three numbers
function multiply(a, b, c) {
    return a * b * c;
}

console.log(multiply(2, 3, 4)); // Outputs: 24

/*
Currying:
- Currying is a technique in functional programming where a function is transformed into a sequence of functions, each with a single argument.
- Instead of taking all arguments at once, a curried function takes the first argument and returns a new function that takes the second argument, and so on.
*/

// Curried version of the multiply function
function curriedMultiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(curriedMultiply(2)(3)(4)); // Outputs: 24

/*
Explanation:
- 'curriedMultiply' is a curried function that takes one argument at a time.
- When 'curriedMultiply(2)' is called, it returns a new function that takes 'b' as an argument.
- When the returned function is called with '3', it returns another new function that takes 'c' as an argument.
- When this final function is called with '4', it computes and returns the result of 'a * b * c'.

Advantages of Currying:
1. Reusability: Curried functions can be partially applied and reused with different arguments.
2. Modular Code: Curried functions help in creating modular and more readable code.
3. Avoids repetitive code: Enables creating specialized functions from general functions.

Example of Partial Application with Currying:
*/

// Partially applied function to double a number
const multiplyBy2 = curriedMultiply(2);
const result = multiplyBy2(3)(4);
console.log(result); // Outputs: 24

/*
Explanation:
- 'multiplyBy2' is a partially applied function where 'a' is set to '2'.
- 'multiplyBy2(3)(4)' then calls the curried function with 'b' as '3' and 'c' as '4', resulting in the final product.

Another Example:
*/

// Further partial application to create a tripler
const multiplyBy3 = curriedMultiply(3);
const tripleResult = multiplyBy3(2)(5);
console.log(tripleResult); // Outputs: 30

/*
Explanation:
- 'multiplyBy3' is a partially applied function where 'a' is set to '3'.
- 'multiplyBy3(2)(5)' then calls the curried function with 'b' as '2' and 'c' as '5', resulting in the final product.

Summary:
- Currying transforms a function with multiple arguments into a sequence of functions, each with a single argument.
- It enhances code reusability and modularity by enabling partial application.
- This approach is widely used in functional programming to create more manageable and readable code.
*/
