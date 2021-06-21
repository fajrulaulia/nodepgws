const { validationResult } = require('express-validator');
const { conn } = require("./driver")

module.exports = {
  validate: (req, res, next) => {
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
  check: async (table, column, value) => {
    const result = await conn().query(`select exists(select true from ${table} where ${column}=$1) `, [value])
    return result.rows[0].exists
  }
}