import mongoose from 'mongoose'
import 'dotenv/config'

app.get('/info', (req, res) => {
  app.get('/info', (req, res) => {
    res.send(`
    <div>Phonebook has info for ${people.length} people</div>
    <div>${new Date().toLocaleString()}</div>
  `)
  })

  res.send(`
    <div>Phonebook has info for ${people.length} people</div>
    <div>${new Date().toLocaleString()}</div>
  `)
})

const url = process.env.MONGODB_URI
mongoose.set('strictQuery', false)
mongoose.connect(url)

Person.find({}).then((people) => {
  people.forEach((person) => {
    console.log(person)
  })
  mongoose.connection.close()
})
