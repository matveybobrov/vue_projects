import express from 'express'
import 'express-async-errors'
import mongoose from 'mongoose'
import cors from 'cors'

import config from './utils/config.js'

import blogsRouter from './controllers/blogs.js'
import usersRouter from './controllers/users.js'
import middleware from './utils/middleware.js'

const app = express()

console.log('Connecting to MongoDB...')
mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err.message)
    process.exit()
  })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app
