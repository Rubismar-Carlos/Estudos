const arr = [1, 2, 3, 4, 5]

const higNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(arr);

console.log(higNumbers);

const users = [
    {
        nome: "Rubens",
        available: true
    },
    {
        nome: "Joao",
        available: true
    },
    {
        nome: "Carlos",
        available: false
    },
    {
        nome: "Cleito",
        available: false
    }
]

const availableUsers = users.filter((user) => user.available );
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);

console.log(notAvailableUsers)