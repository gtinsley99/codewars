
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution

function pigIt(str){
    let newArr = [];
    let strArr = str.split(" ");
    strArr.forEach((x) => {
      let wordArr = x.split("");
      wordArr.push(x[0]);
      wordArr.shift();
      if (x === "!"|| x === "?"|| x=== ";"|| x===","|| x==="."){
        newArr.push(x);
      } else {
          wordArr.push("a", "y");
        newArr.push(wordArr.join(""));
      };
    });
    return newArr.join(" ");
  };