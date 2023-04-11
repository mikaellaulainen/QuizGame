const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  usermail: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  }
})

userSchema.set('toJSON', {
  transform: (document,returnedObject) => {
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)