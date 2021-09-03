/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
*/

/*
function arithmetic(a, b, operator){
  let res; 
    switch (operator) {
      case operator = 'add':
        res = a + b;
      
      case operator = 'subtract':
          res = a - b;
      
      case operator = 'multiply':
          res = a * b;
      
      case operator = 'divide':
          res = a / b;
    } 
  return res;
}
*/

function arithmetic(a, b, operator){
  return ({
     'add': (a, b) => a+b,
     'subtract': (a, b) => a-b,
     'mulriple': (a, b) => a*b,
     'divide': (a, b) => a/b
  })[operator](a,b)
}
 