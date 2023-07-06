let arr = [1, 2, 3, 4, false, 888, "ok"];

console.log(`quantity of elements: ${arr.length}`);

let result = arr.map(function (item, index, array) {
  console.log(item);
});