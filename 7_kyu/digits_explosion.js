/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
Digits.Explode("312") = "333122"
Digits.Explode("102269") = "12222666666999999999"
*/

function explode(s) {
  let res = [];
  
  for (let i=0; i<s.length; i++) {
    for (let j=0; j<parseInt(s[i]); j++) {
      res.push(parseInt(s[i]));
    }
  }
  return res.join('');
}

const explode = s => s.replace(/\d/g, d => d.repeat(d));