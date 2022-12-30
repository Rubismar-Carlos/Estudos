import MyForm from './Components/MyForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm  user={{name:'Josias', email:"josias@gmail.com", bio:"Sou administrador", role:"admin"}}/>
    </div>
  );
}

export default App;
