const logger = require('./logger')

const requestLogger = (req,res,next) => {
  logger.info(`Method: ${req.method}`)
  logger.info(`Path: ${req.path}`)
  logger.info(`Body: ${req.body}`)
  logger.info('----')
  next()
}

const unknownEndpoint = (req,res) => {
  res.status(404).send({ error: 'UNKNOWN ENDPOINT' })
}

const errorHandler = (error,req,res,next) => {
  logger.error(error.message)

  if(error.name === 'Casterror') {
    return res.status(400).send({ error : 'MALFORMATTED ID' })
  } else if(error.name === 'ValidationError'){
    return res.status(400).json({ error : error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'INVALID TOKEN'
    })
  } else if (error.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: 'TOKEN EXPIRED'
    })
  }
  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}