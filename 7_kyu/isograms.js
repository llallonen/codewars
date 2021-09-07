/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str){
  str = str.toLowerCase().split('');

do {  
  let temp = str.shift();
    if (str.includes(temp)) {
      return false
      break
    }
  } while (str.length !=0) 

return true
}