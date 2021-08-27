/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/


function findShort(s){
  s = s.split(' ');
  let shortest = s[0];
  for (let i=0; i < s.length; i++) {
    if (s[i].length < shortest.length) {
      shortest = s[i];
    }
  }
  return shortest.length;
}


function findShortFaster(s) {
  s = s.split(' ');
  s.sort((a, b) => b.length - a.length);
  let lastSorted = s.pop();
  return lastSorted.length;
}