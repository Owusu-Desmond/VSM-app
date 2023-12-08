const mongoose = require('mongoose')
const { Schema } = mongoose

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isActive: { type: Boolean, default: true }
})

module.exports = mongoose.model('Project', projectSchema)
