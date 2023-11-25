/* eslint-disable no-param-reassign */
import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})
blogSchema.set('toJSON', {
  transform: (document, returnedDocument) => {
    returnedDocument.id = returnedDocument._id
    delete returnedDocument._id
    delete returnedDocument.__v
  },
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog
