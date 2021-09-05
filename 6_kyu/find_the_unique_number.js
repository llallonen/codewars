/*
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

Example
Input: [ 1, 8, 4, 4, 6, 1, 8 ]
Expected output: 6
*/

function findUnique(numbers) {
  let counter = {};
  for (let i = 0; i < numbers.length; i++) {
    if (!counter.hasOwnProperty(numbers[i])) {
      counter[numbers[i]] = 1;     
    } else {
      counter[numbers[i]] = counter[numbers[i]] + 1;
    }
  }
    
  let uniq = Number.parseInt(Object.keys(counter).find(key => counter[key] === 1));
  return uniq;
}
  