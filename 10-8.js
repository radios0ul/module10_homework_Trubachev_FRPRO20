let myMap = new Map();

myMap.set('key1', 'pr1');
myMap.set('key2', 'pr2');
myMap.set('key3', 'pr3');
myMap.set('key33', 'pr33');

for (let name of myMap.keys()) {
   
  console.log(`Key - ${name}, Value - ${myMap.get(name)}`)
   
}