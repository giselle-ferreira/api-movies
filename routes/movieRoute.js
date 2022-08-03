// módulo fs
const fs = require('fs')
const { join } = require('path') 

const filePath = join(__dirname, 'movies.json')

// Métodos para busca Filme
const getMovie = () => {
    const data = fs.existsSync(filePath) 
        ? fs.readFileSync(filePath) 
        : [] 

    try {
        return JSON.parse(data) 
    } catch(error) {
        return [] 
    }
}

// Método para salvar filme
const saveMovie = (movies) => fs.writeFileSync(filePath, JSON.stringify(movies, null, '\t'))

// movieRoute
// Rota responsável por todos os outros métodos
const movieRoute = (app) => {
    app.route('/movies/:id?')
        .get((req, res) => {  
        
        const movies = getMovie() 

        res.send({ movies })


    }).post((req, res) => { // Adicionar filme
        const movies = getMovie() 

        const { title, year, franchise, genre, duration, img } = req.body 

        movies.push(req.body) // Adiciona o filme e salva
        saveMovie(movies)

        res.status(201).send('Filme adicionado.') //status informando o ok


    }).put((req, res) => { // Atualizar filme
        const movies = getMovie()

        // map para criar um novo objeto atualizando o usuário passado
        saveMovie(movies.map(movie => {
            if(movie.id === req.params.id) {
                return {...movie, ...req.body} // retorna o filme existente e os demais atualizados
            } 
            return movie // ou, retorna o filme atual sem modificação
        }))
        res.status(200).send('Ok')


    }).delete((req, res) => {
        const movies = getMovie()

        saveMovie(movies.filter(movie => movie.id !== req.params.id))

        res.status(200).send('Ok')
    })           
       
}

module.exports = movieRoute 