
const validarID = /\d+ID\b/;

console.log(validarID.test("fjdsbnfgdsID"));
console.log(validarID.test("32873625ID"));
console.log(validarID.test("fjdsbnfgds"));
console.log(validarID.test("dsds"));
console.log(validarID.test("ID"));
console.log(validarID.test("ID"));