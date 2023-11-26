import express from 'express'
import Blog from '../models/blog.js'
import User from '../models/user.js'

const blogsRouter = express.Router()

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  res.json(blogs)
})

blogsRouter.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('user', {
    username: 1,
    name: 1,
  })
  if (!blog) {
    return res.status(404).end()
  }
  res.json(blog)
})

blogsRouter.post('/', async (req, res) => {
  const body = req.body
  const user = await User.findById(body.userId)

  const blog = new Blog({
    ...body,
    user: user.id,
  })
  const savedBlog = await blog.save()

  user.blogs = user.blogs.concat(savedBlog.id)
  await user.save()

  res.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

blogsRouter.put('/:id', async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.json(updatedBlog)
})

export default blogsRouter
