const Challenge = () => {

    const valorA = 7
    const valorB = 3
    
    const somarValores = () => {
        return console.log(valorA + valorB)
    }

    return (
        <div>
            <h1>Esse e o valor do 'A' {valorA}</h1>
            <h1>Esse e o Valor do 'B' {valorB}</h1>
            <div>
                <button onClick = {somarValores}>Somar Valores de A e B</button>
            </div>
        </div>
    )
}

export default Challenge