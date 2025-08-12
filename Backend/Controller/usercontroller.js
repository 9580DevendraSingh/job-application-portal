const User = require('../Module/usermodule');
const bcrypt = require('bcrypt');

// Create new user
const createuser = async (req, res) => {
  try {
 
    console.log("shjdfcd jhhvfjdc",req.body);
    const user = await User.create(req.body);
    console.log("usre created",user);
    res.status(201).json(user);
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ message: err.message });
  }
};

// Get all users
const findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createuser,findAll };
