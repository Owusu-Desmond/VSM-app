const mongoose = require('mongoose')
const { Schema } = mongoose

const projectSchema = new Schema({
  name: { type: String },
  description: { type: String },
  isActive: { type: Boolean }
})

module.exports = mongoose.model('Project', projectSchema)
