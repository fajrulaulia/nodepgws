
const express = require('express')
const validator = require('./services/validator')
const UserController = require('./controller/user/user-controller')
const UserValidator = require('./controller/user/user-validator')

const Route = express.Router()

module.exports = Route
  .post("/login", UserController.login)
  .post("/register", UserValidator.register, validator, UserController.register)

