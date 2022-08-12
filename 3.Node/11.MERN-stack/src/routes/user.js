const express = require('express')
const router = new express.Router()
const User = require('../model/user')
const auth = require('../middleware/auth')

router.post('/users/register', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (err) {
    console.log(err)
    res.status(400).send({
      error: err
    })
  }
})

router.post('/users/login', async (req, res) => {
  try {
    // check if the values provided are valid
    const user = await User.findByCredentials(req.body.email, req.body.password)
    // generate token
    const token = await user.generateAuthToken()
    // return token and user
    res.status(200).send({user, token})
  } catch (err) {
    res.status(400).send({error: err})
  }
})

router.delete('/users/delete', auth, async (req, res) => {
  try {
    const user = await req.user.delete()
    if(!user) {
      throw new Error ('No user found!')
    }
    res.status(202).send(user)
  } catch (err) {
    res.status(400).send({error: err})
  }
})


module.exports = router