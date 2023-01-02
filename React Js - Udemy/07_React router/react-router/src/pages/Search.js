import { useSearchParams, Link} from 'react-router-dom'
import { useFetch } from "../hooks/useFetch"

function Search() {
    const [ searchParams ] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const { data: items, loading, error } = useFetch(url)
  return (
    <div>
        <h1>Resultados disponiveis</h1>
        <ul className="products">
            {loading && <p>Carregando ...</p>}
            {error && <p>Aconteceu algum erro...</p>}
            {items && items.map(item => (
                <li key={item.id}>
                    <h2>{item.nome}</h2>
                    <p>R$: {item.price}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
                ))}
    </ul>
    </div>
  )
}

export default Search