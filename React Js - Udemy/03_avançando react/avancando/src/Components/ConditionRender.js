import { useState } from "react"

function ConditionRender() {

    const [x] = useState(false);

    const [name, setName] = useState("Joao");

  return (
    <div>
        <h1>Isso será exibido ?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora o x é falso</p>}
        <h1>If ternário</h1>
        {name === "Rubens" ? (
            <div>
                <p>O nome é Rubens</p>
            </div>
        ) : (
            <div>
                <p>não foi encontrado</p>
            </div>
        )}

        <button onClick={() => setName("Rubens")}>Clica aqui</button>
    </div>
  )
}

export default ConditionRender