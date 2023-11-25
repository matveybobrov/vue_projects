/* eslint-disable no-param-reassign */
import mongoose from 'mongoose'

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
