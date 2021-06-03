const jwt = require('jsonwebtoken')
const Users = require('../models/users')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWTSecretKey)
    const user = await Users.findOne({
      _id: decoded._id
    })
    req.user = user
    next()
  } catch (err) {
    res.status(401).send({
      error: 'Authentication Token is invalid!'
    })
  }
}

module.exports = auth