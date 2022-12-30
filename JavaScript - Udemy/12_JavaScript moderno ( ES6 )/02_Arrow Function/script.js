const sum = function sum(a,b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a * b
}

console.log(sum(5,5));

console.log(arrowSum(2,5));

const greeting = (name) => {

    if(name) {
        return `Olá ${name}`
    } else {
        return 'Olá'
    }

}

console.log(greeting(''));

const testeArrow = () => console.log('Testou')

testeArrow();

const user = {
    name: 'Rubens',
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " `${this.name}`)
        }, 500)
    }
}

user.sayUserNameArrow();