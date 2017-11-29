'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return    queryInterface.createTable('book', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      name: Sequelize.STRING,
      category_id:{
        type: Sequelize.INTEGER,
      //   references: {
      //     model: 'category',
      //     key: 'id'
      // },
      } ,
      author_id: {
        type: Sequelize.INTEGER,
      //   references: {
      //     model: 'author',
      //     key: 'id'
      // },
    }
     }); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('book'); 
  }
};
