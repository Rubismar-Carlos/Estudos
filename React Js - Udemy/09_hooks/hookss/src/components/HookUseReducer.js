import { useReducer, useState } from "react"

const HookUseReducer = () => {
    // 1 - começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    // 2 - avançando no useReducer
    const initialTaks = [
        {id: 1, text:"Fazer alguma coisa"},
        {id: 2, text:"Fazer outra coisa"}
    ]

    const taksReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }

                setTaskText("")

                return [...state, newTask]
                case "DELETE":
                    return state.filter((task) => task.id !== action.id)
                default:
                    return state
        }
    }

    const [taskText, setTaskText] = useState("")
    const [ tasks, dispatchTasks] = useReducer(taksReducer, initialTaks)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: "ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id: id})
    }

  return (
    <div>
        <h2>UseReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número!</button>

        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={(e) => setTaskText(e.target.value)}
                value={taskText} 
            />
            <input type="submit" value="Enviar"/>
        </form>
        {tasks.map((taks) => (
            <li key={taks.id} onDoubleClick={() => removeTask(taks.id)}>{taks.text}</li>
        ))}

        <hr />
    </div>
  )
}

export default HookUseReducer