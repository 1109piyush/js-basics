/*Temporarily Dead Zone:
This refers to a period in which a variable declared with the let or const keyword is not yet initialized and cannot be accessed. This occurs between the start of the block in which the variable is declared and the point at which it is initialized. This period is referred to as the "temporarily dead zone" because attempts to access the variable during this time will result in a ReferenceError.
Example 1(using let):
*/
function myFunc() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 5;
    console.log(x); // 5
}

myFunc();

/*
In this example, we are trying to access the variable x before it is declared, which results in a ReferenceError.This is because let has a TDZ where the variable cannot be accessed before it is fully declared.Once x is declared and initialized with the value of 5, we can log it and get the value 5.

Example 2(using var):*/

 
function myFunc() {
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
}

myFunc();
/*In this example, we are trying to access the variable x before it is declared, but we get undefined instead of a ReferenceError.This is because var does not have a TDZ, and the variable is automatically initialized to undefined.Once x is declared and initialized with the value of 5, we can log it and get the value 5.




Lexical Scope:
This refers to the set of variables and functions that are accessible from a particular part of your code. In JavaScript, the scope of a variable is determined by where it is declared in your code. Variables declared outside of a function have global scope, while variables declared inside a function have local scope. Bahar valla x andr x ho sakta hai but andr ka bahar nhi
Example 1(using let):*/

let x = 10;

function myFunc() {
    let y = 5;
    console.log(x); // 10
    console.log(y); // 5
}

myFunc();
/*In this example, we declare the variable x in the global scope, which makes it accessible anywhere in the code.Inside the function, we declare the variable y with the let keyword, which gives it block-level scope.y is only accessible within the function and not outside of it.When we log x and y inside myFunc(), we get the values 10 and 5, respectively.

    Example 2(using var):*/

       
function myFunc() {
    var x = 10;
    if (true) {
        var x = 5;
        console.log(x); // 5
    }
    console.log(x); // 5
}

myFunc();

/*In this example, we declare the variable x twice using the var keyword.The first declaration is inside the function myFunc(), which creates a function-level scope for x.The second declaration is inside an if block, which does not create a new scope for x.Since var does not have block-level scope, the two x variables are the same and affect each other.When we log x inside the if block, we get the value 5, and when we log it outside the block, we also get the value 5.


Execution Context:
This refers to the environment in which your code is executed. It includes information such as the value of this, the scope chain, and the variables and functions available in that particular context. In JavaScript, there are three types of execution contexts: global, function, and eval.
Example 1 (using let):
*/
let x = 10;

function myFunc() {
  let y = 5;
  console.log(x + y);
}

myFunc(); // 15
/*
In this example, we have a global variable x and a function myFunc() that adds x and a local variable y and logs the result. Both x and y are declared using the let keyword, which means they are only accessible within their respective scopes. When we call myFunc(), the execution context is created for the function, which includes the variables x and y. The function is executed, and x and y are added together, resulting in 15 being logged to the console.

Example 2 (using var):

*/
var x = 10;

function myFunc() {
  console.log(x);
}

myFunc(); // 10

/*In this example, we have a global variable x and a function myFunc() that logs the value of x. x is declared using the var keyword, which means it has function-level scope. When we call myFunc(), the execution context is created for the function, which includes the variable x. The function is executed, and the value of x (10) is logged to the console


Hoisting:
function jessa call hotta hai upr puch jatta hai call stack ki vgh sa khalli function
This refers to the behavior in JavaScript where variable and function declarations are moved to the top of their respective scope before the code is executed. This means that you can use a variable or function before it is declared in your code.

Example 1 (using let):

*/
function myFunc() {
  console.log(x); // undefined
  let x = 5;
  console.log(x); // 5
}

myFunc();
/*
In this example, we have a function myFunc() that declares a variable x using the let keyword. When the function is executed, the JavaScript engine creates the variable x in memory, but it is not yet initialized to a value, so accessing it will return undefined. This is known as hoisting, where variable declarations are moved to the top of their respective scope, but their assignments remain in place. After the variable is declared and initialized to 5, we log its value to the console, which correctly outputs 5.

Example 2 (using var):


*/
function myFunc() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}

myFunc();
/*
In this example, we have a function myFunc() that declares a variable x using the var keyword. Similarly to the let example, when the function is executed, the variable x is hoisted to the top of the function, but it is also initialized to undefined at the same time. When we log the value of x, it will return undefined. After the variable is assigned to 5, we log its value to the console, which outputs 5.

Note: Hoisting is a behavior that can sometimes cause unexpected results in your code, so it's important to understand how it works and to write your code accordingly.


clousure
In JavaScript, a closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. This means that a closure can "remember" and access the values of variables that were in scope when the closure was created.

Here's an example of a closure using the let keyword:
function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2



In this example, the createCounter function returns another function that has access to the count variable in its outer scope. Each time the returned function is called, it increments the count variable and logs the new value to the console. Because the count variable is declared using let, it is block-scoped to the createCounter function and is not accessible outside of it. However, the closure created by the returned function retains access to count.

Here's an example using the var keyword:
function createGreeter(name) {
  var greeting = "Hello";
  return function() {
    console.log(greeting + ", " + name);
  }
}

const greetJohn = createGreeter("John");
greetJohn(); // Output: "Hello, John"

const greetJane = createGreeter("Jane");
greetJane(); // Output: "Hello, Jane"



In this example, the createGreeter function returns another function that has access to the greeting and name variables in its outer scope. The greeting variable is declared using var, which means that it is function-scoped and is accessible outside of the createGreeter function. However, because each closure created by the returned function has its own lexical environment, the value of greeting and name are separate for each closure.



