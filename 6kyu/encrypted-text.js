// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// My solution

function encrypt(text, n) {
    if (text){
    for (let i = 0; i < n; i++){
    let even = "";
    let odd = "";
    text.split("").map((letter, index) => {
      if ((index + 1) % 2 === 0){
        even += letter;
      } else {
        odd += letter;
      }
    })
    text = even + odd;
  }}
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (encryptedText){
      let split = encryptedText.length / 2;
        for (let i = 0; i < n; i++){
    let even = [];
    let odd = [];
    encryptedText.split("").map((letter, index) => {
      if (index + 1 <= split){
        even.push(letter);
      } else {
        odd.push(letter);
      }
    })
          let newText = "";
    for (let i = 0; i < (encryptedText.length) / 2; i++){
           newText += odd[i];
      if (newText.length !== encryptedText.length){
         newText += even[i];
      }
          
    }
      encryptedText = newText;
  } }
    return encryptedText;
      }