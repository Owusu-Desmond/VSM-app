const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const api = require('./api')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
env.config()

app.set('port', (process.env.PORT || 8080))

app.use(cors())
app.use(express.json()) // for parsing application/json

app.use(morgan('dev'))
app.use(express.static('public'))
app.use('/api', api)

// Error handling middleware for 404 errors
app.use((req, res) => {
  const err = new Error('Not found')
  err.status = 404
  res.json(err)
})

// Connect to database

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
  console.log('Connected to database')
})

app.listen(app.get('port'), () => {
  console.log('Application is listening to port ' + app.get('port'))
})
