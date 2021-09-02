/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/


/*
function generateShape(integer) {
  let str = '';
  for (let i=0; i<integer*integer; i++) {
     str += '+';
  }
  str = str.split("");

  for (let i = integer-1; i < str.length-1; i+=integer) {
     str[i] = "+\n";
  }
  return str.join("");
}
*/

function generateShape(integer){
    return ("+".repeat(integer)+"\n").repeat(integer).trim();
}