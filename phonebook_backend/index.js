import express from 'express'
const app = express()

const people = [
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

app.get('/api/people', (req, res) => {
  res.json(people)
})

app.get('/info', (req, res) => {
  res.send(`
    <div>Phonebook has info for ${people.length} people</div>
    <div>${new Date().toLocaleString()}</div>
  `)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})