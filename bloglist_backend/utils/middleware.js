const unknownEndpoint = (req, res) => {
  res.status(404).json({
    error: 'unknown endpoint',
  })
}

const errorHandler = (err, req, res, next) => {
  if (err.name === 'CastError') {
    res.status(400).json({
      error: 'malformatted id',
    })
  }
  if (err.name === 'ValidationError') {
    res.status(400).json({
      error: err.message,
    })
  }
  next(err)
}

export default { unknownEndpoint, errorHandler }
