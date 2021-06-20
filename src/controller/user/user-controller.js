const UserModel = require("../../model/User")

module.exports = {
  login: (req, res) => {

  },

  register: (req, res) => {
    const payload = [
      req.body.username,
      req.body.password,
      req.body.email,
      req.body.phonenumber
    ]

    UserModel.insert(payload)
      .then((result) => res.status(200).json({ success: true, message: "Register Success", data: result.rows[0] }))
      .catch((error) => res.status(500).json({ success: false, message: error.message }))
  }
}