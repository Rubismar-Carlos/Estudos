import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    // 1 - useEfect, sem dependências
    useEffect(() => {
        console.log("Estou sendo executado")
    })

    const [number, setNumber] = useState(1)

    const somarNumeros = () => {
        setNumber(number + 1)
    }

    // 2 - array de dependências, vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez!")
    }, [])

    // 3 - item no array de dependênciaas
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda!")
        }
    },[anotherNumber])

    // 6 - cleanup do useEffect
    //useEffect(() => {
        //const timer = setTimeout(() => {
          //  console.log("Hello World")

        //}, 2000)

       // return () => clearTimeout(timer)
    //},[anotherNumber])

  return (
    <div>
        <h2>UseEffect</h2>
        <p>Número: {number}</p>
        <button onClick={somarNumeros}>Somar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>

        <hr />
    </div>
  )
}

export default HookUseEffect