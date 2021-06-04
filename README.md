<h1 align="center">
  <img alt="products" src="https://i.pinimg.com/originals/61/3c/ea/613ceaae3543acdf381af20da47612dc.png" width="120px" />
</h1>


# Projeto CRUD usando Sequelize + Node.js + mySQL
Nesse projeto criamos um CRUD do 0, utilizando a biblioteca sequelize sobre Node.js Express.js e MySQL.

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd produtos_CRUD`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database.js`;
5. Rode `yarn sequelize db:create` para criar o banco de dados;
6. Rode `yarn sequelize db:migrate` para executar as migrations;

## Routes

*+Alunos+*

 Router => /| METHOD  => GET | DESCRIPTION => vizualização de todos os produtos

 Router => /cadastro | METHOD  => POST | DESCRIPTION => Cadastro dos produtos 

 Router => /produtos/atualizacao/:id | METHOD  => PUT | DESCRIPTION => Atualização do preço de um produto a partir de seu id 

 Router => /produtos/deletar/:id | METHOD  => DELETE | DESCRIPTION => Deletando um produto a partir de seu id

 
	
## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


## Author

* **Valtercio Santiago Ferreira Junior** - [GitHub](https://github.com/valtercioj) - Email: juniorvaltercio2015@gmail.com