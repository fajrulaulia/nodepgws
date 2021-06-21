// ...rest of the initial code omitted for simplicity.
const { body } = require('express-validator');

module.exports = {
  register: [
    body('email').isEmail(),
    body('username').isLength({ max: 50, min: 5 }).notEmpty(),
    body('password').isLength({ min: 3 }).notEmpty(),
    body('phonenumber').isMobilePhone().notEmpty(),
  ]
}