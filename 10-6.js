const arr = [0, 0, 0, 0, 0];

let watcher = true;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1]) {
    watcher = true;
  } else {
    watcher = false;
    break;
  }
}

console.log(watcher);