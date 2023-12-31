import logger from './logger.js'

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    response.status(400).json({
      error: 'malformatted id',
    })
  }
  if (error.name === 'ValidationError') {
    response.status(400).json({
      error: error.message,
    })
  }

  next(error)
}

export default { requestLogger, unknownEndpoint, errorHandler }
