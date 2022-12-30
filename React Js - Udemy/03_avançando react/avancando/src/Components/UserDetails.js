
function UserDetails({nome, profissao, age}) {

  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {age}</p>
        <p>Profissao: {profissao}</p>
        <h4>Posso tirar a cnh ?</h4>
        {age >= 18 ? (
            <p>Pode tirar a cnh</p>
        ) : (
            <p>Menor de Idade, não pode</p>
        )}
        
    </div>
  )
}

export default UserDetails