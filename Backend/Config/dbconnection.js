const {Sequelize} = require('sequelize');
const db = new Sequelize('mydatabase2','root','Mysql@123',{ //yaha pr reactdata ke sthan pr mydadatabase /database ka name hoga..
  host : 'localhost',
  dialect : 'mysql',
}
);

module.exports = db;