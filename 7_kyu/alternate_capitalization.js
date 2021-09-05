/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:
*/

function capitalize(s){
  let arr = s.split('');
  
  function func1(item,i) {
    return i%2 === 0 ? item.toUpperCase() : item.toLowerCase();
  }
  
  function func2(item,i) {
    return i%2 !== 0 ? item.toUpperCase() : item.toLowerCase();
  }
  
  let even = arr.map(func1).join('');
  let odd = arr.map(func2).join('');
  
  
  return [even, odd];
}