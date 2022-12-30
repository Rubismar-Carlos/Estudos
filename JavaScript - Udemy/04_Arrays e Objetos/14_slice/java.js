let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5)); //ele ira pegar o 4 e parar no 5 e so mostrara o 4
console.log(nums.slice(4,6)); //ira pegar 4 e 5 e parara no 6
console.log(nums.slice(2)); //como n determinou em qual parar ele vai ate o fim do array no caso o 9

console.log(nums.slice(-2)) //ele ira pegar os 2 ultimos numeros

console.log(nums.slice(2,-2)) // ira pegar do 2 e ira remover os 2 ultimos 