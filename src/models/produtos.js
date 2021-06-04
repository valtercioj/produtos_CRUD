
const { Model, DataTypes } = require('sequelize')


class Produtos extends Model{
  static init(sequelize){
    super.init({
      nome: DataTypes.STRING,
      categoria: DataTypes.STRING,
      preco: DataTypes.INTEGER,
    }, {
      sequelize
    })

    return this;
  }
}

module.exports = Produtos;