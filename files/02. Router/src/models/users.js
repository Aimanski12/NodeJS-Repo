const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Please enter a valid email!')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error(`Password cannot contain 'password'`)
      }
    }
  },
  avatar: {
    type: Buffer
  }
})

// hash password before saving
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

userSchema.methods.generateAuthToken = async function () {
  const user = this

  const token = jwt.sign({
    _id: user._id.toString()
  }, process.env.JWTSecretKey)

  // return token after it has been created
  return token
}


const Users = mongoose.model('User', userSchema)

module.exports = Users