//import { useContext } from "react"

//import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

// 4- refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

//5 - context complexo 
import { useTitleColorContext } from "../hooks/useTitleColor"

const Home = () => {
    // const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext()

    // 5 - contexto mais complexo
    const {color, dispatch} = useTitleColorContext()

    // 6 - alterando state complexo
    const setTitleColor = (color) => {
      dispatch({ type: color })
    }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador: {counter}</p>
        {/* 3 - Aletrando valor do contexto*/}
        <ChangeCounter />
        {/* 6 - Aletrando contexto complexo*/}
        <div>
            <button onClick={() => setTitleColor("BLUE")}>Blue</button>
            <button onClick={() => setTitleColor("YELLOW")}>YELLOW</button>
        </div>
    </div>
  )
}

export default Home