let pessoa = {
    "nome": "Rubens",
    "idade": "23",
    "profissao": "progamador",
    "hobbies": ["Video games", "Academia", "Festas"],
};
//JSON e usando entre back end e  front end

 // Usando tudo entre aspas esse e o JSON mas para o navegador ler ele como texto temos que transformar ele em string usando EX: JSON.stringify(nome da variavel)

 //Pelo stringfy nao podemos acessar nenhuma objeto dentro dele porque ele so e um texto

let umaPessoa = JSON.stringify(pessoa);

console.log(umaPessoa);

let pessoaJSON = JSON.parse(umaPessoa);

console.log(pessoaJSON);

// Usando JSON.parse transforma todo o texto da variavel em objetos para ser acessados pelo navegador no caso do strinfy que so entrega como texto.

//Depois de colocar ela em parse e transformando tudo dentro dele como objetos podemos acessar os objetos normalmente
console.log(pessoaJSON.hobbies)
