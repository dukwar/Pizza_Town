const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./public/db.json')
const middlewares = jsonServer.defaults({
    static: './build',
})

const PORT = process.env.PORT || 3001

// server.get('/pizzas', (req, res) => {
//     const db = require('./public/db.json')
//     res.json(db.positions.pizzas)
// })

// server.get('/snacks', (req, res) => {
//     const db = require('./public/db.json')
//     res.json(db.positions.snacks)
// })

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
    console.log('Server is running')
});