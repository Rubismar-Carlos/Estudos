import { useState } from 'react';
import './App.css';
import Anoitecer from './assets/anoitecer.jpg';
import CarDetails from './Components/CarDetails';
import ConditionRender from './Components/ConditionRender';
import ListRender from './Components/ListRender';
import ManageData from './Components/ManageData';
import ShowUserName from './Components/ShowUserName';
import Fragmento from './Components/Fragmento';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessageState from './Components/ChangeMessageState';
import UserDetails from './Components/UserDetails';


function App() {
  //const name = "Joaquim"
  const [userName] = useState("Rubens")

  const cars = [
    {id: 1, brand:"Ferrari", color: "Verde", km:0, newCar: true},
    {id: 2, brand:"Porsche", color: "Verde", km: 323, newCar: true},
    {id: 3, brand:"Mustang", color: "Roxo", km: 3234, newCar: true}
  ]

  function showMensagem() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  // Desafio

  const users = [
    { id: 1, nome: "Rubens", age: "23", profissao:"Progamador" },
    { id: 2, nome: "João", age: "23", profissao: "Polidor" },
    { id: 3, nome: "Paulo", age: "23", profissao: "Vendedor" },
    { id: 4, nome: "Miguel", age: "17", profissao: "Não Tem" },
]

  return (
    <div className="App"> 
    <h1>Avançando em React</h1>
    {/* Imagem em public */}
    <div>
      <img src="/po-x.webp" alt="Paisagem" />
    </div>
    {/* Imagem em asset */}
    <div>
      <img src={Anoitecer} alt="Anoitecer" />
    </div>
    <ManageData/>
    <ListRender/>
    <ConditionRender />
    {/* Props */}
    <ShowUserName  name= {userName}/>
    {/* Destructuring*/}
    <CarDetails brand="VW" km={10000} cor="Azul" newCar={true}/>
    {/* Reaproveitando */}
    <CarDetails brand="Fiat" km={0} cor="Preto" newCar={false} />
    <CarDetails brand="Ford" km={0} cor="Vermelho" newCar={true} />
    {/* Loop */}
    {cars.map((car) => (
      
      <CarDetails 
      key={car.id}
      brand={car.brand}
      cor={car.color}
      km={car.km}
      newCar={car.newCar} />

    ))}
    {/* Fragmentos */}
    <Fragmento propFragmento="Teste" />

    {/* Children */}
    <Container myValue="Testing">
      <p>Esse e o texto</p>
    </Container>
    <Container myValue="Testing 2">
      <h5>Testando o Container</h5>
    </Container>

    {/* Executando função*/}
    <ExecuteFunction myFunction={showMensagem}/>
    {/* State Lift */}
    <Message msg={message}/>
    <ChangeMessageState handleMessage={handleMessage}/>

      {/* Exercicio seção 3 */}
      {users.map((user) => (
        <UserDetails 
        key={user.id}
        nome={user.nome}
        profissao={user.profissao}
        age={user.age}/>
      ))}
    </div>
  );
}

export default App;
