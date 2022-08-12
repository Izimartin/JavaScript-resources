const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const secret = require('../../config/keys')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true
  }
})

// checks if the password is changed and then update if so.
userSchema.pre('save', async function (next){
  const user = this
  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

// function to verify if the values provided are valid
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({email})
  // throw an error if user is not found
  if(!user) throw new Error(`Unable to login! User does not exists!`)
  // check if password matches to the saved password
  const isMatch = await bcrypt.compare(password, user.password)
  // throw an error is password provided is incorrect
  if(!isMatch) throw new Error(`Unable to login! Incorrect password!`)
  // return the user
  return user
}

// function to generate authorization token
userSchema.methods.generateAuthToken = async function () {
  const user = this
  // generate token
  const token = jwt.sign({
    _id: user._id.toString()
  }, secret.JWTSecretKey)
  return token
}

const User = mongoose.model('User', userSchema)

module.exports = User