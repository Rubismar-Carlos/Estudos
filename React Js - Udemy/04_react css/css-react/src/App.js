import './App.css';
import MyComponennt from './Components/MyComponennt';
import {useState} from 'react'
import Title from './Components/Title';


function App() {
  const n = 15
  const [name] = useState("Rubens")
  const redTitle = false
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente*/}
      <MyComponennt />
      {/* CSS inline */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este Elemento foi estilizado de forma inline</p>
      {/* CSS inline dinamico*/}
      <h2 style={n > 10 ? ({color: "purple"}) : ({color:"pink"})}>Css dinâmico</h2>
      <h2 style={n < 10 ? ({color: "purple"}) : ({color:"pink"})}>Css dinâmico</h2>

      <h2 style={name === "Rubens" ? {color: "green", background: "#000"} : null }> Teste nome</h2>

      {/* Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter uma classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
      
    

    </div>
  );
}

export default App;
