import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import Person from './models/person.js'

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

app.get('/info', (req, res) => {
  res.send(`
    <div>Phonebook has info for ${people.length} people</div>
    <div>${new Date().toLocaleString()}</div>
  `)
})

app.get('/api/people', (req, res) => {
  Person.find({}).then((people) => {
    res.json(people)
  })
})

app.get('/api/people/:id', (req, res) => {
  Person.findById(req.params.id)
    .then((foundPerson) => {
      if (foundPerson) {
        res.json(foundPerson)
      } else {
        res.status(404).end()
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

app.delete('/api/people/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/api/people', (req, res) => {
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

  newPerson.save().then((savedPerson) => {
    res.status(201).json(savedPerson)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
