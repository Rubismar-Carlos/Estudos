let pessoa = {
    nome: "Rubens",
    profissao: "Progamador",
    idade: 23,
}

console.log(pessoa.nome);

delete pessoa.nome; //apos o delete da undefined

console.log(pessoa.nome)

console.log(pessoa)

pessoa.casado = false; //para adicionar um objeto  

console.log(pessoa.casado);
