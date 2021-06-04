'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('produtos', 
      {
        id:{
          type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
        },
        nome:{
          type: Sequelize.STRING,
          allowNull:false
        },
        categoria: {
          type: Sequelize.STRING,
          allowNull:false
        },
        preco:{
          type: Sequelize.FLOAT,
          allowNull:false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false
        }
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('produtos');
  }
};
