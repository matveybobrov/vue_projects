import express from 'express'
const app = express()

let people = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

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
  res.json(people)
})

app.get('/api/people/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = people.find((person) => person.id === id)

  if (!person) {
    return res.status(404).json({
      error: 'No person with such id',
    })
  }
  res.json(person)
})

app.delete('/api/people/:id', (req, res) => {
  const id = Number(req.params.id)

  people = people.filter((person) => person.id !== id)
  res.status(204).end()
})

app.post('/api/people', (req, res) => {
  const { name, number } = req.body

  if (name === undefined || number === undefined) {
    return res.status(400).json({
      error: 'Name or number is missing',
    })
  }

  const doesExist = people.find((person) => person.name === name)
  if (doesExist) {
    return res.status(400).json({
      error: 'Person with such name already exists',
    })
  }

  const newPerson = {
    name,
    number: String(number),
    id: people.length + Math.floor(Math.random() * 1000),
  }
  people.push(newPerson)
  res.status(201).json(newPerson)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
