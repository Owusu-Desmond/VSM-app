const express = require('express')
const app = express()
const api = require('./api')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.set('port', (process.env.PORT || 8080))

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.use((res, req) => {
  const err = new Error('Not found')
  err.status = 404
  res.json(err)
})

app.listen(app.get('port'), () => {
  console.log('Application is listening to port ' + app.get('port'))
})
