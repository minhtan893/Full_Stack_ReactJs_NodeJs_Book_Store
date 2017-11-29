require('dotenv').config();
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    dialect :'mysql',
    define: {
        underscored: true
      }
});

var book = require('./book')(sequelize, Sequelize);
var category = require('./category')(sequelize, Sequelize);

const model = {};
model.book = book;
model.category = category;

model.book.belongsTo(model.category);
model.category.hasMany(model.book);

module.exports =  model;