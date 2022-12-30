const frutas = ["maça", "uva", "abacaxi"];

const [f1, f2, f3] = frutas

console.log(f1);
console.log(f2);
console.log(f3);

const productDetails = {
    name: "Mouse",
    price: 39.90,
    category: "Perifericos",
    color: "cinza",
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O Produto ${productName} esta no valor de R$${price}, sua categoria é ${productCategory} na cor ${color}`);