let nome = "Rubens";

for (let i = 0; i < 10; i = i + 1) {
    if (i == 3) {
        nome = "Joao";
    }
    if (i == 5 && nome == "Joao") {
        console.log ("O nome é Joao pode parar")
        break
    }

    console.log (i)
}