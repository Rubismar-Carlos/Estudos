import React, { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = "joão";

    const [name, setName] = useState("Rubens")

    const changeName = () => {
        userName = "Jõao Souza"

        setName("Rubens Carlos")

        console.log(name)
        console.log(userName)
    }

    // 2 - useState e input
    const [age, setAge] = useState(23)

    const handleSubmit = (e) => {
        e.preventDefault()

        // envio a uma API
        console.log(age)

    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeName}>Clique para mudar o nome</button>

        {/* 2 - useState e input */}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar"/>
        </form>
        <p>Você tem {age} anos.</p>

        <hr />

    </div>
  )
}

export default HookUseState