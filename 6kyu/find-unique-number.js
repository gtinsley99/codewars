// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// My solution

function findUniq(arr) {
    let ordArr = arr.sort((a, b) => a - b);
    if (ordArr[0] - ordArr[1] !== 0){
      return ordArr[0];
    } else {
      return ordArr[arr.length - 1];
    }
  };