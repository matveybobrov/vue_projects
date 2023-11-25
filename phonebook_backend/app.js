import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import logger from './utils/logger.js'
import config from './utils/config.js'
import middleware from './utils/middleware.js'

import peopleRouter from './controllers/people.js'

const app = express()

logger.info('Connecting to MongoDB')
mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Successfully connected to MongoDB')
  })
  .catch((err) => {
    logger.error('Error connecting to MongoDB', err.message)
    process.exit()
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/people', peopleRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app
