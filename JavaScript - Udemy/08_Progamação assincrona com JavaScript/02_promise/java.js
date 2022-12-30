let p = Promise.resolve(5);

console.log("Algum codigo");

p.then((value) => { return value * 5 })
.then((value) => { console.log(value); });