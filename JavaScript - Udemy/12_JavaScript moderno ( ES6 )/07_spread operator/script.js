const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2];

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const car = {name: 'Gol'}
const car1 = {marca: "Volks"}
const car2 = {price: 49000}

const carNew = {...car, ...car1, ...car2}

console.log(carNew)