const bcrypt = require('bcrypt') //THIS LIBRARY IS USED TO CRYPT PASSWORD
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/',async (req,res) => {
  const { username,fullname,password } = req.body

  const passwordHash =await bcrypt.hash(password,10)

  const  user = new User({
    username,
    fullname,
    passwordHash
  })

  const savedUser = await user.save()

  res.status(201).json(savedUser)
})

usersRouter.get('/',async (req,res) => {
  const users = await User.find({})
  res.json(users)
})

module.exports = usersRouter