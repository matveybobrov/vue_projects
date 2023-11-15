import mongoose from 'mongoose'
import 'dotenv/config'

const url = process.env.MONGODB_URI
mongoose.set('strictQuery', false)
mongoose.connect(url)

Person.find({}).then((people) => {
  people.forEach((person) => {
    console.log(person)
  })
  mongoose.connection.close()
})
