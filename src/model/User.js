const { conn } = require("../services/driver")
module.exports = {
  insert: (payload) => {
    const query = `INSERT INTO users
      (username, email, passkey, phonenumber) VALUES
      ($1, $2, $3, $4) RETURNING id,username, email, passkey, phonenumber`
    return conn().query(query, payload)
  }
}