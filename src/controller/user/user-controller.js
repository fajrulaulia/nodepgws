const UserModel = require("../../model/User")
const security = require("../../services/security")

module.exports = {
  login: (req, res) => {
    res.json({"messag":"bapa"})

  },

  register: async (req, res) => {
    req.body.password = await security.hash(req.body.password)
    const payload = [
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.phonenumber
    ]

    UserModel.insert(payload)
      .then((result) => {
        security.sign(res, result.rows[0])
        res.status(200).json({ success: true, message: "Register Success", data: result.rows[0] })
      })
      .catch((error) => {
        console.log("[error] => ", error)
        res.status(500).json({ success: false, message: error.message })
      })
  }
}