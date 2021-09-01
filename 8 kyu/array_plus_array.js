/*Array plus array

How to get the sum of two arrays, actually the sum of all their elements?
Each array includes only integer numbers. Output is a number too.*/

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, current) => (acc + current));
}