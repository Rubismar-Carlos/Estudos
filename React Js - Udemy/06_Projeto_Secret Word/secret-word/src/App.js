// CSS
import './App.css';

// React
import { useCallback, useEffect, useState} from "react"

// data
import {wordsList} from "./data/word"

// components
import StartScreen from './Components/StartScreen';
import Game from './Components/Game';
import GameOver from './Components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [word] = useState (wordsList)

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickeWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(word)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const words = word[category][Math.floor(Math.random() * word[category].length)]

    return {words, category}
  }, [word])

  // starts the secret word game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates()

    // pick word and pick category
    const {words, category} = pickeWordAndCategory();

    // create an array of letters
    let wordLetters = words.split("")

    // Para a primeira letra começar minuscula
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    // fill states
    setPickedWord(words)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)

  }, [pickeWordAndCategory])

  // proces the letter input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || 
    wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // push guessed letter or remove a guess
    if(letter.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1);
    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // check if guesses ended

  useEffect(() => {
    if(guesses <= 0) {

      // reset all states
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  // check win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    // win condition
    if(guessedLetters.length === uniqueLetters.length) {

      // add score 
      setScore((actualScore) => actualScore += 100)

      // restart game with new word 
      startGame()
    }

  }, [guessedLetters, letters, startGame])

  // restarts the game
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}

      {gameStage === "game" && (
      <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />
      )}

      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
