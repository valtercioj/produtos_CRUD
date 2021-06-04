const Produto = require('../models/produtos')

module.exports = {
	async index(req, res){
		const produtos = await Produto.findAll()
		if (produtos == ""){
			return res.status(400).json("produtos não cadastrado")
		}
		return res.json(produtos)
	},

	async store(req, res){
		const { nome, categoria, preco } = req.body

		if (nome == "" || categoria == "" || preco == ""){
			return res.status(400).json("Digite os dados corretos")
		}
		else if (nome == undefined || categoria == undefined || preco == undefined){
			return res.status(400).json("Digite os dados corretos")
		}

		else{
			const produtos = await Produto.create({
				nome,
				categoria,
				preco
			})

			return res.json(produtos)
		}
	},

	async update(req, res){
		const { id } = req.params
		const { preco } = req.body
		const produtos = await Produto.update(
			{preco},{
			
				where:{id:id}
			}
		)

		if (produtos == 0){
			return res.status(400).json("produto não encontrado")
		}

		return res.json({"msg":"preço atualizado"})
	},

	async delete(req, res){
		const { id } = req.params
		
		const produtos = await Produto.destroy({
			where:{id:id}
		})
		if (produtos == 0){
			return res.status(400).json("produto não encontrado")
		}
		return res.json({"msg":"produto deletado com sucesso"})

	}

}