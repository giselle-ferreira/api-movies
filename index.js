// ToDo: Criar endpoint para users:
// Listar Usuários (Get)
// Criar usuário (Post)
// Modificar usuário (Put)
// Remover usuário (delete)

// import
const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')
const movieRoute = require('./routes/movieRoute')

// criar a app
const app = express();

// porta
const port = 3000

// Middleware
// Para transformar o dado em objeto
app.use(bodyParser.urlencoded({ extended: false }))

// Rotas
userRoute(app)
movieRoute(app)



// Página root
app.get('/', (req, res) => 
    res.send('Olá Express!'))

// Porta
app.listen(port, () => console.log(`Api rodando na porta ${port}`))