const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (req,res) => {
  const { username,password } = req.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if(!(user && passwordCorrect)){
    return res.status(401).json({
      error:'Your login details were incorrect. Please try again'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET_TOKEN, { expiresIn: 60 }) //Token expires in 1 minute! ADJUST THIS WHEN LAUNCHING
  res.status(200).send({ token, username: user.username, fullname: user.fullname })
})

module.exports = loginRouter