const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const db = require('./data/config')

const app = express()

const PORT = process.env.PORT || 4040

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

function getAll() {
  return db('cars')
}

function getById(id) {
  return db('cars').where({ carId: id })
}

function insert(car) {
  return db('cars')
    .insert(car)
    .then(data => {
      return getById(data[0])
    })
}

app.get('/api/cars/', (req, res) => {
  getAll()
    .then(resp => {
      res.status(200).json(resp)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: `Error getting cars` })
    })
})

app.get('/api/cars/:id', (req, res) => {
  const { id } = req.params
  getById(id)
    .then(resp => {
      res.status(200).json(resp)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: `Cannont get a car with id ${id}` })
    })
})

app.post('/api/cars/', (req, res) => {
  const car = req.body
  insert(car)
    .then(resp => {
      res.status(200).json(resp)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: err })
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
