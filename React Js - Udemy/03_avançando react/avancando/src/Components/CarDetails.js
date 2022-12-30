
function CarDetails({brand, km, cor, newCar}) {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {newCar && <p>Esse carro e novo</p>}
    </div>
  )
}

export default CarDetails