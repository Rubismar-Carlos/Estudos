const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)

        console.log("Voce clicou em mim")
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Estou renderizando isso</h1>
        } else {
            return <h1>Tambem posso renderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Cliclou!")}>Clique aqui também</button>
                <button onClick={() => {
                    if(true) {
                        console.log("isso nao deveria acontecer")
                    }
                }}>Clique aqui por favor.</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;