import './MyForm.css'
import {useState} from 'react'

function MyForm({user}) {
    // 6 - controlled inputs

    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando o formulario")
        console.log(name, email, bio, role)

        // 7 - limpar formulario
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

  return (
    <div>
        {/*5 - envio de form*/}
        {/* 1 - Criacao de form*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder="Digite o seu nome" onChange={handleName} value={name} />
            </div>
            <input type="submit" value="Enviar" />
            {/*2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* simplificacao de manipulacao de state*/}
                <input type="email" name="Email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 = select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm