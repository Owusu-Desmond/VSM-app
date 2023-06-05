const mongoose = require('mongoose')
const { Schema } = mongoose

const standupSchema = new Schema({
  teamMemberId: {
    type: Schema.Types.ObjectId,
    ref: 'TeamMember'
  },
  teamMember: { type: String },
  project: { type: String },
  workYesterday: { type: String },
  workToday: { type: String },
  impediments: { type: String },
  createdOn: { type: String, default: Date.now }
})

module.exports = mongoose.model('Standup', standupSchema)
