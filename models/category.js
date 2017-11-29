
module.exports = category = (sequelize, Sequelize) =>{
    return  sequelize.define('category', {
        'id' :{
            type : Sequelize.INTEGER,
            primaryKey : true,
            field : 'id'
        } ,
        'name' :{
          type : Sequelize.STRING,
          field : 'name'  
        } ,
    },{
        tableName: "category"
    });
};

