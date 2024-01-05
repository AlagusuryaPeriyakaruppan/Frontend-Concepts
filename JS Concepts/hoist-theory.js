/*
SOURCES:

How JS Code gets executed?
https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3

Temporal Dead zone:
https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=9

JS SERIES:
https://www.youtube.com/watch?v=qcixpy3HQ9s&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t

*/

/**THREE TYPE OF ERRORS:
 *
 * When you access undeclared variable or access variable that is declared using let before intialisation
 * REFERENCE ERROR:
 * --ReferenceError: Cannot access 'a' before initialization
 * --ReferenceError: x is not defined
 * When you try to access the arrow function
 * --ReferenceError: Cannot access 'func' before initialization
 *
 * SYNTAX ERROR:
 * const a;
 * --SyntaxError: Missing initializer in const declaration
 * Reason: const variable should always be initialised and cannot be redeclared or reassigned.
 * Redeclaration of variable is not allowed in let
 * --SyntaxError: Identifier 'a' has already been declared
 *
 * TYPE ERROR:
 * const a = 100;
 * a = 10;
 * TypeError: Assignment to constant variable.
 *
 * When you try to invoke an arrow function that is declared with var keyword
 * TypeError: func is not a function
 *
 *
 * What is Temporal dead Zone?
 * Time between variable declaration and initialisation is TDZ.we can shrink its time to zero by initialising it in the top.
 *
 *
 * Let and const are hoisted but in temporal dead zone.They are allocated to different memory space called Script so it is not accessible until initialised.
 *
 *
 */

/*

1. When JavaScript code is executed, Execution Context is created and it is called Global Execution Context.
2. JavaScript program is executed in TWO PHASES inside Execution Context
  a. MEMORY ALLOCATION PHASE - JavaScript program goes throughout the program and allocate memory of Variables and Functions declared in program.
  b. CODE EXECUTION PHASE -  JavaScript program now goes throughout the code line by line and execute the code. 
3. A Function is invoked when it is called and it acts as another MINI PROGRAM and creates its own Execution Context.
4. Returns keyword return the Control back to the PREVIOUS Execution-Context where the Function is invoked and Execution Context of the Function is DELETED.
5. CALL STACK maintains the ORDER of execution of Execution Contexts. It CREATES Execution Context whenever a Program starts or a Function is invoked and it pops out the Execution Context when a Function or Program ENDS.


*/

/*

-- Arrow functions are not hoisted and normal functions are hoisted
-- How hoisting works even when JS is interpreted language?
This is because JS Compiler is written in some other language like C++(Compiled language) which makes hoisting possible.Entire JS code given to JS Engine which executes code
in two steps.

*/

/*
    Interpreter - Sourcecode --> Byte Code --> Machine Code ---> Executes the code
    Compiler - SourceCode --> MachineCode ---> Executes the code
    JS is an interpreted language.But later browser like chrome started doing JIT to make the engines faster.

    So, while the code is being interpreted, the compiler helps interpreter to optimize the code in run time.
    JS can act both interpreted and compiled language.It completely depends on the JS engine.

*/
