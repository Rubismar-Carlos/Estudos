const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira eletrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 399.99, category: 'Eletro'},
    {name: 'Calça Jeans', price: 49.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.OnSale = true
    }
})

console.log(products)