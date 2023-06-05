const mongoose = require('mongoose')
const { Schema } = mongoose

const teamMemberSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String },
  createdOn: { type: String, default: Date.now }
})

module.exports = mongoose.model('TeamMember', teamMemberSchema)
