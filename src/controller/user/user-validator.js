// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

module.exports = {
  validatehandler: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Your request is invalid",
        data: errors.array()
      });
    }
    next()
  },
  register: [
    body('email').isEmail(),
    body('username').isLength({ max: 50, min: 5 }).notEmpty(),
    body('password').isLength({ min: 3 }).notEmpty(),
    body('phonenumber').isMobilePhone().notEmpty(),
  ]
}