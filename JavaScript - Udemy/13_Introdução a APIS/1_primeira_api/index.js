const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rotas - endpoints

// get - receber dados
app.get("/", (req, res) => {
    res.status(200).json({message: "Primeira rota criado com sucesso!"})
})


// Post - enviar dados
app.post("/create", (req, res) => {
    const name = req.body.name
    const price = req.body.price

    // Retornando status 201: criado com sucesso, 200: ok, 422: erro., Sempre se deve retornar o status
    if(!name) {
        res.status(422).json({message: "O campo nome é obrigatório."})

        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: "Produto cadastrado com sucesso!"})
})
app.listen(3000)