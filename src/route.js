
const express = require('express')
const UserController = require('./controller/User')
const Route = express.Router()

module.exports = Route
  .post("/login", UserController.login)
  .post("/register", UserController.register)

