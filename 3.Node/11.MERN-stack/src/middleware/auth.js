const jwt = require('jsonwebtoken')
const secret = require('../../config/keys')
const User = require('../model/user')

const auth = async (req, res, next) => {
  try {
    // parse the bearer token
    const token = req.header('Authorization').replace('Bearer ', '')
    // decode the token
    const decoded = jwt.verify(token, secret.JWTSecretKey)
    // find one user
    const user = await User.findOne({
      _id: decoded._id
    })
    // throw an error is no user is found
    if(!user) {
      throw new Error('Invalid Token ID!')
    }
    // assign the user to the request header
    req.user = user
    next()
  } catch (err) {
    // throw and error
    res.status(401).send({
      error: 'Invalid Token ID!'
    })
  }
}

module.exports = auth