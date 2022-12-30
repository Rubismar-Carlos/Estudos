//import { useContext } from 'react'
//import { CounterContext } from "../context/CounterContext"

//hook
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColor"

const About = () => {
    const { counter, setCounter } = useCounterContext()

    const {color} = useTitleColorContext()

    function zerarCounter()  {
        setCounter(0)
    }

  return (
    <div>
        <h1 style={{color: color}}>About</h1>
        <p>Valor do contador: {counter}</p>
        <button onClick={zerarCounter}>Zerar contador</button>
    </div>
  )
}

export default About
