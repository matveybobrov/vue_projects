import express from 'express'
import Person from '../models/person.js'

const peopleRouter = express.Router()

peopleRouter.get('/', (req, res) => {
  Person.find({}).then((people) => {
    res.json(people)
  })
})

peopleRouter.get('/:id', (req, res, next) => {
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

peopleRouter.delete('/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch((err) => {
      next(err)
    })
})

peopleRouter.post('/', (req, res, next) => {
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

peopleRouter.put('/:id', (req, res, next) => {
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

export default peopleRouter
