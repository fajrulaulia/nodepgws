const { DriverDb } = require("../../services/driver")
module.exports = {
  insert: (payload) => {
    const query = `INSERT INTO users
      (username, email, passkey, phonenumber) VALUES
      ($1, $2, $3, $4) RETURNING id,username, email, phonenumber`
    return DriverDb().query(query, payload)
  },
  login:(payload)=>{
    const query = `SELECT id,username, email, phonenumber, passkey FROM users where 
    (username =$1 OR email =$1 )`
  return DriverDb().query(query, payload)
  }
}