// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// My solution

function duplicateEncode(word){
    let arr = word.toLowerCase().split("");
    let output = "";
    arr.map((letter) => {
      let count = 0;
      for (let i = 0; i<word.length; i++){
        if (arr[i] === letter){
          count += 1;
    }
      }
      count > 1 ? letter = ")" : letter = "(";
      output += letter;
  })
    return output;
  }