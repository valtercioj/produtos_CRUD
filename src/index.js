const express = require('express')
const app = express()
const routes = require('./routers')


app.use(express.json())
app.use(routes)

require('./database')



app.listen(8000, ()=> {
	console.log('Servidor rodando na porta 8000')
})