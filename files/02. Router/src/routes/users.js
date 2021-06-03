const mongodb = require('mongodb')
const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()
const Users = require('../models/users')

// register a user
router.post('/users/register', async (req, res) => {
  const user = new Users(req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()

    res.status(201).send({
      user,
      token
    })
  } catch (err) {
    res.status(401).send(err)
  }
})

// get user information
router.get('/users/me', auth, async (req, res) => {
  const user = await Users.findOne({
    _id: req.user._id
  })
  res.status(200).send(user)
})

// get all users
router.get('/users/all', auth, async (req, res) => {
  if (req.user) {
    const user = await Users.find()
    res.status(200).send(user)
  } else {
    res.status(401).send({
      error: new Error('Token is invalid')
    })
  }
})

// patch user information
router.patch('/users', auth, async (req, res) => {
  if (req.user) {
    req.user.firstname = req.body.firstname
    req.user.lastname = req.body.lastname

    await req.user.save()
    res.status(200).send(req.user)
  }
})

// delete user information
router.delete('/users', auth, async (req, res) => {
  const user = await Users.findOneAndDelete({
    _id: req.user._id
  })
  console.log(user)
  res.status(200).send(user)
})

module.exports = router