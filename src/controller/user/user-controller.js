const Model = require("./user-model")
const security = require("../../../services/security")

module.exports = {
  login: (req, res) => {
    const payload = [
      req.body.key,
    ]
    Model.login(payload)
      .then((result) => {
        if (result.rows.length !== 1) {
          res.status(401).json({ success: false, message: "Account Not Found" })
        }

        if (result.rows[0] && result.rows[0].passkey) {
          security.compare(req.body.value, result.rows[0].passkey).then((match) => {
            if (match) {
              delete result.rows[0].passkey
              security.sign(res, result.rows[0].passkey)
              res.status(200).json({ success: true, message: "Login Success", data: result.rows[0] })
            } else {
              res.status(401).json({ success: true, message: "Account Not Found" })
            }
          }).catch((error) => {
            console.log("[error] => ", error)
            res.status(500).json({ success: false, message: error.message })
          })
        }

      })
      .catch((error) => {
        console.log("[error] => ", error)
        res.status(500).json({ success: false, message: error.message })
      })
  },

  register: async (req, res) => {
    req.body.password = await security.hash(req.body.password)
    const payload = [
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.phonenumber
    ]

    Model.insert(payload)
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
