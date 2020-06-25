// Basic Algorithm Scripting: factorialize

/*Description
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Tests

factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/

//Solution 1 on FCC

function factorialize(num) {                    //1
    for (var product = 1; num > 0; num--) {     //2
        //console.log(num);                     //2.1
        //console.log(product);                 //2.2
      product *= num;                           //3
    }
return product;                                 //4
  }
  
  console.log(factorialize(5));                 //5
  //Output = 120


 //Notes To help me understand the code by line

   /*
        1 - function factorialize(num) {
          - The function declaration (function statement) defines a function with the specified parameters.
          - You can also define functions using the Function constructor and a function expression.
          - source - [https://devdocs.io/javascript/statements/function]

        2 - for loop, It has three optional expressions. They are [initialization]; [condition]; [final-expression]. Source = [https://devdocs.io/javascript/statements/for]

            In this example it is used as follows:
            [initialization];     = var product = 1;
            [condition];          = num > 0
            [final-expression]    = num--

            [initialization] - The loop will start the product variable at 1 and multiply each product output (e.g var product = 1 * 5 = 5) by the current iterator. In this case it is 4 so the new product output will be 20

            [condition] - This is the condition to stop the loop as a 0 factorial is equal to one, just as 1 is. 

            [final-expression] - Will decrement the loop from input value (In this case 5) until specified condition (In this case num > 0)

           +---------------------+-----------------------------+--------------------------+
           |     Iterations      | 3   - product *= num;       | 3   - product *= num;    |
           +---------------------+-----------------------------+--------------------------+
           |2.1 -console.log(num)| 2.2 - console.log(product)  | 3   - Calculation        |
           +---------------------+-----------------------------+--------------------------+
           | -  5                |     -  1                    |  var product = 1;        |
           | -  4                |     -  5                    |  var product = 1   * 5;  |
           | -  3                |     -  20                   |  var product = 5   * 4;  |
           | -  2                |     -  60                   |  var product = 20  * 3;  |
           | -  1                |     -  120                  |  var product = 60  * 2;  | num > 0 = Condition met here


        3 - Above

        4 - The return ends function execution and specifies a value to be returned to the function caller.

        5 - console.log(factorialize(5)) - displays value to the output




  */