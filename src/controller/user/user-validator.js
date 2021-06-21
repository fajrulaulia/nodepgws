// ...rest of the initial code omitted for simplicity.
const { body } = require('express-validator');
const validate = require("../../services/validator")

module.exports = {
  register: [
    body('email').isEmail().notEmpty().custom((value) => new Promise((resolve, reject) => {
      validate.check("users", "email", value).then((result) => {
        if (result) reject(new Error("Email is Exist in own Database"))
        resolve(true)
      }).catch((err) => reject(new Error(err)))
    })),

    body('username').isLength({ max: 50, min: 5 }).notEmpty().custom((value) => new Promise((resolve, reject) => {
      validate.check("users", "username", value).then((result) => {
        if (result) reject(new Error("Username is Exist in own Database"))
        resolve(true)
      }).catch((err) => reject(new Error(err)))
    })),
    
    body('password').isLength({ min: 3 }).notEmpty(),
    body('phonenumber').isMobilePhone().notEmpty(),
  ]
}