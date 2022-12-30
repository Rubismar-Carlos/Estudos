import { useContext } from 'react'
import { CounterContext } from "../context/CounterContext"
import { useTitleColorContext } from '../hooks/useTitleColor'

const Products = () => {
  const { counter, setCounter } = useContext(CounterContext)
  const {color} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>Produtos</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Products