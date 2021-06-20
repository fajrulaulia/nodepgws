const UserModel = require("../model/User")
const Controller = {
  login: (req, res) => {
    const data = {
      username: req.body.username,
      password: req.body.password
    }
    res.json({ "message": data })
  },
  register: (req, res) => {
    const payload = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }
    const response = {}
    UserModel.insert(payload).then((result) => {
      response.message = "Success"
      console.log(result)
      res.status(200).json(result)
    }).catch((err) => {
      response.message = "Failed"
      res.status(400).json(response)
    })
  }
}

module.exports = Controller


// const queryParams = {
//   sort: req.query.sort,
//   type: req.query.type
// }
