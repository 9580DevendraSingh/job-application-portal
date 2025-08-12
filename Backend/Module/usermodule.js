const db = require('../Config/dbconnection');
const { DataTypes } = require('sequelize');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  // confirm_password: {
  //   type: DataTypes.STRING(255),
  //   allowNull: false
  // },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  state: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  district: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
}, 
// {
//   tableName: 'users',
//   timestamps: true
// }
);

module.exports = User;

User.sync({alter: true}); //is line ka matlab hai ki jo bhi table yaha pr gernate hogi vahi hamare database me show hogi.
