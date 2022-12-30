
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Rubens", "Isabella"])

    const [users, setUsers] = useState([
        { id: 1, name: "Rubens", age: 23},
        { id: 2, name: "Mathes", age: 54},
        { id: 3, name: "Pedro", age: 44},
        { id: 4, name: "Isabella", age: 21},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);        

        setUsers((prevUsers) => {

            console.log(prevUsers)

            return prevUsers.filter((user) => randomNumber !== user.id)

        })

    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
        ))}
        </ul>
        <button onClick={deleteRandom}>Deletar User Random</button>
    </div>
  )
}

export default ListRender