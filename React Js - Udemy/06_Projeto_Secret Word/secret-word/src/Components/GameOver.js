import "./GameOver.css"

function GameOver({retry, score}) {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>A sua Pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver