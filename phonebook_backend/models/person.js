import mongoose from 'mongoose'
import 'dotenv/config'

const url = process.env.MONGODB_URI

console.log(`Connecting to MongoDB...`)
mongoose.set('strictQuery', false)
mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(() => {
    console.log('Error connecting to MongoDB')
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 3,
    required: true,
  },
})
personSchema.set('toJSON', {
  transform: (document, returnedDocument) => {
    returnedDocument.id = returnedDocument._id.toString()
    delete returnedDocument._id
    delete returnedDocument.__v
  },
})

const Person = mongoose.model('Person', personSchema)

export default Person
