const express = require('express')

const router = express.Router()

require('./routes/projects')(router)
require('./routes/team')(router)
require('./routes/standup')(router)

module.exports = router
