import express from 'express'
import Blog from '../models/blog.js'

const blogsRouter = express.Router()

blogsRouter.get('/', (req, res, next) => {
  Blog.find({})
    .then((blogs) => res.json(blogs))
    .catch((err) => next(err))
})

blogsRouter.post('/', (req, res, next) => {
  const blog = new Blog(req.body)

  blog
    .save()
    .then((savedBlog) => res.status(201).json(savedBlog))
    .catch((err) => next(err))
})

export default blogsRouter
