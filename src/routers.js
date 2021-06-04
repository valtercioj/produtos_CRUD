const express = require('express')
const router = express.Router()
const produtosController = require('./controllers/produtosController')

router.get('/', produtosController.index)
router.post('/cadastro', produtosController.store)
router.put('/produtos/atualizacao/:id', produtosController.update)
router.delete('/produtos/deletar/:id', produtosController.delete)

module.exports = router;