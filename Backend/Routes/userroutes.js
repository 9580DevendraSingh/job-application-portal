const express = require("express");
const router = express.Router();

// const { findAll, createuser } = require("../Controller/usercontroller");
const usercontroller = require("../Controller/usercontroller");

router.get("/find", usercontroller.findAll);       // Get all users
router.post("/create", usercontroller.createuser); // Create a new user


module.exports = router;
