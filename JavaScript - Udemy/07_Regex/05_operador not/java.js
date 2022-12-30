const notab = /[^ab]/ // nao vai aceitar a e b

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/; // nao vai aceitar de a ate z

console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("asfdsjhgfdskfksdfds"));