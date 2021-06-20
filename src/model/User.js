const Client = require("../services/driver")
module.exports = {
  insert: (payload) => {
    let query = "INSERT INTO public.users" +
      "(id, username, email, passkey, isverified, isdisabled, phonenumber, updated_at, created_at)" +
      "VALUES(gen_random_uuid(), $1, $2, $3, false, false, '', now(), CURRENT_TIMESTAMP) RETURNING *"
    let value = [payload.username, payload.email, payload.password]
    return new Promise((resolve, reject) => {
      Client.conn().query(query, value)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }
}