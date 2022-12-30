//3 - alterando contexto
import { useContext, useState  } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>
        <button onClick={() => setCounter(counter - 1)}>Rmv value to counter</button>
    </div>
  )
}

export default ChangeCounter