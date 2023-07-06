let arr = [2, 0, 5, 0, null, "o", 10, 111, 3, 1.2, 10000];

let evenCounter = 0;
let oddCounter = 0;
let zeroCounter = 0;
let othertypeCounter = 0;
let fractionCounter = 0;

arr.forEach(function (item, index, array) {

  if (item === 0) {
    zeroCounter++;
  } else {
    if (typeof item != "number") {
      othertypeCounter++;
    } else {
      if (item - Math.trunc(item) != 0) {
        fractionCounter++;
      } else {
        if (item % 2 === 0) {
          evenCounter++;
        } else {
          oddCounter++;
        }
      }
    }
  }
});

console.log(`Even: ${evenCounter}, Odd: ${oddCounter}, 
Zeroes: ${zeroCounter}, Fractions: ${fractionCounter},
Other type items: ${othertypeCounter}`);
