// ToDo: Criar endpoint para users:
// Listar Usuários (Get)
// Criar usuário (Post)
// Modificar usuário (Put)
// Remover usuário (delete)

// import
const express = require('express')
const bodyParser = require('body-parser')
const movieRoute = require('./routes/movieRoute')
const cors = require('cors')

// criar a app
const app = express();

// porta
const port = process.env.PORT || 3000

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
movieRoute(app)

// Página root
app.get('/', (req, res) => 
    res.send('Sagas API by Giselle Ferreira.'))

// Porta
app.listen(port, () => console.info("Api rodando em http://localhost:3000"))