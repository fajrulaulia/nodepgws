const bcrypt = require("bcrypt")
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
  }
}