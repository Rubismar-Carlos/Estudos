import { createContext } from "react"

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent"

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent"
import Destructuring, {Category} from "./components/Destructuring"

// 6 - useState
import State from "./components/State"

// 11 - utilizando context
import Context from "./components/Context"

// 9 - type
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo"

// 10 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
}

export const appContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = "Rubens"
  const age: number = 23
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`
  }

  // 9 - type
  const myText: textOrNull = "Tem algum texto aqui"
  let secondText: textOrNull= null;

  secondText = "Hello"

  const testandoFixed: fixed = "Isso"

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <appContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome : {name}</h2>
      <p>Idade : {age}</p>
      {isWorking && (
        <p>Está trabalhando!</p>
      )}
      <h3>{userGreeting(name)}</h3>
      < FirstComponent />
      < SecondComponent name="Segundo"/>
      < Destructuring  title="Primeiro post" content="Algum contéudo" commentsQty={10} tags={["ts", "js"]} category={Category.TS} />
      < Destructuring  title="Segundo post" content="Algum contéudo" commentsQty={5} tags={["python"]} category={Category.P}/>
      < State />
      { myText && <p>Tem texto na variável</p>}
      {secondText && <p>Tem texto na viriável</p>}
      {testandoFixed && <p>So aparece se o valor for aceitavel</p>}
      < Context />
    </div>
    </appContext.Provider>
  );
}

export default App;
