module.exports = book = (sequelize, Sequelize) => {
    return  sequelize.define('book', {
        'id' :{
            type : Sequelize.INTEGER,
            primaryKey : true,
            field : 'id'
        } ,
        'name' :{
          type : Sequelize.STRING,
          field : 'name'
        } ,
        'author_id' : {
            type : Sequelize.INTEGER,
            field : 'author_id'
        },
        'description' :{
            type : Sequelize.STRING,
            field : 'description'
        },
        'category_id' : {
            type : Sequelize.INTEGER,
            field: "category_id"
        }
    },{
        tableName: "book"
    });
};

