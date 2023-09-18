// Simple, given a string of words, return the length of the shortest word(s).

// // String will never be empty and you do not need to account for different data types.

// My solution

function findShort(s){
    const sArray = s.split(" ").map((element) => element.length);
    sArray.sort((a, b) => a - b );
    return sArray[0];
  };