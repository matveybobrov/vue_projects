import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import Person from './models/person'

const app = express()
app.use(cors())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.json())
app.use(requestLogger)

app.get('/api/people', (req, res) => {
  Person.find({}).then((people) => {
    res.json(people)
  })
})

app.get('/api/people/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then((foundPerson) => {
      if (foundPerson) {
        res.json(foundPerson)
      } else {
        res.status(404).end()
      }
    })
    .catch((err) => {
      next(err)
    })
})

app.delete('/api/people/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch((err) => {
      next(err)
    })
})

app.post('/api/people', (req, res, next) => {
  const { name, number } = req.body

  if (name === undefined || number === undefined) {
    return res.status(400).json({
      error: 'Name or number is missing',
    })
  }

  const newPerson = new Person({
    name,
    number,
  })

  newPerson
    .save()
    .then((savedPerson) => res.status(201).json(savedPerson))
    .catch((err) => next(err))
})

app.put('/api/people/:id', (req, res, next) => {
  const { name, number } = req.body
  if (name === undefined || number === undefined) {
    return res.status(400).json({
      error: 'Name or number is missing',
    })
  }

  Person.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPerson) => {
      res.json(updatedPerson)
    })
    .catch((err) => next(err))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

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

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
