const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const quizzesRouter = require('./controllers/quizzes')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose =require('mongoose')

mongoose.set('strictQuery', false)

logger.info(`CONNECTING TO DATABASE: ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('CONNECTION TO DATABASE SUCCESS')
  }).catch((error) => {
    logger.error(`ERRROR IN CONNECTING TO DATABASE: ${error.message}`)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/quizzes', quizzesRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app