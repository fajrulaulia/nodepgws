const bcrypt = require("bcrypt")
const validator = require("./validator")
const jwt = require("jsonwebtoken")
module.exports = {
  hash: (plainPassword) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(12, (err, salt) => {
        if (err) reject(err)
        bcrypt.hash(plainPassword, salt, (err, hash) => {
          if (err) {
            reject(err)
          } else {
            resolve(hash)
          }
        });
      })
    })
  },
  compare: (plainPassword, hashPassword) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainPassword, hashPassword, (err, result) => {
        if (err) reject(err)
        resolve(result)
      });
    })
  },
  sign: (res, payload) => {
    const data = { payload }
    // uncoment if enable expired time
    // data.exp = Math.floor(Date.now() / 1000) + (60 * 60)
    const token = jwt.sign(data, 'secret');
    res.set('authorization', `Bearer ${token}`);
    console.log(`Bearer ${token}`)
  },
  verify: (req, res, next) => {
    if (req.headers && !req.headers.authorization) {
      return res.status(401).json({
        success: false,
        message: "Authorization is not found,  please contact administrator",
      })
    }

    if (req.headers.authorization.split(" ").length !== 2) {
      return res.status(401).json({
        success: false,
        message: "Authorization is invalid,  please contact administrator",
      })
    }

    if (!req.headers.authorization.includes("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "Authorization is invalid,  please contact administrator",
      })
    }


    jwt.verify(req.headers.authorization.split(" ")[1], 'secret', (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Authorization is jwt malformed,  please contact administrator",
        })
      } else {
        if (decoded && decoded.payload && decoded.payload.id && !validator.check("users", "id", decoded.payload.id)) {
          return res.status(401).json({
            success: false,
            message: "Authorization is invalid and not valid in or daatabase,  please contact administrator",
          })
        } else {
          next()
        }
      }
    })
  }
}