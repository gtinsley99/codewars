// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// My solution

function moveZeros(arr) {
    let noneZero = arr.filter((arr) => arr !== 0);
    let zeroCount = arr.length - noneZero.length;
    
    for (let i = 0; i < zeroCount; i++){
      noneZero.push(0);
    }
    return noneZero;
  }