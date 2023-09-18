// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// My solution

function expandedForm(num) {
    let str = num.toString();
    let zero = "0"
    let arr = str.split("");
    let arrWithZeros = arr.map((dig, index) => dig === "0" ? dig = "remove" : dig + zero.repeat(arr.length - index - 1));
    return arrWithZeros.filter((word) => word !== "remove").join(" + ");
  };