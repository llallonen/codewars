/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Note that the number will always be non-negative (>= 0).
*/


// function insertDash(num) {
//   let res = '';
//   let initial = num.toString();
  
//   for (let i=0; i<initial.length; i++) {
//      if (initial[i] % 2 === 0) {
//        res = res + initial[i];
//      } else {
//        if (initial[i + 1] % 2 != 0 && initial[i + 1] != undefined) {
//          res = res + initial[i] + '-';
//        } else {
//          res = res + initial[i];
//        }
//      }
//   }
//   return res;
// }


function insertDash(num) {
  let res = num.toString();
  return res.replace(/[13579](?=[13579])/g, "$&-");
}