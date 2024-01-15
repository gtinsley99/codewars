// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// My solution

function spinWords(string){
    let spin = "";
    string.split(" ").map((word) => {
      if (word.length >= 5){
       word = word.split("").reverse().join("");
      }
       if (spin !== ""){
        word = " " + word;
      }
      spin += word;
    })
    return spin;
  }
