// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

// My solution

function pascalsTriangle(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let prev = arr.slice(arr.length - i);
        for (let j = 0; j < prev.length + 1; j++) {
          if (j === 0 || j === prev.length) {
            arr.push(1);
          } else {
            arr.push(prev[j] + prev[j - 1]);
          }
        }
    }
    return arr;
  }