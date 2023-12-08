const mongoose = require('mongoose')
const { Schema } = mongoose

const requireStringValidator = [
  function (val) {
    const testVal = val.trim()
    return (testVal.length > 0)
  },
  // custom error text
  '{PATH} should not be empty'
]

const standupSchema = new Schema({
  teamMemberId: {
    type: Schema.Types.ObjectId,
    ref: 'TeamMember',
    require: true
  },
  teamMember: { 
    type: String, 
    require: true, 
    validate: requireStringValidator
  },
  project: { 
    type: String, 
    require: true, 
    validate: requireStringValidator
  },
  workYesterday: { 
    type: String, 
    require: true, 
    validate: requireStringValidator 
  },
  workToday: { 
    type: String, 
    require: true, 
    validate: requireStringValidator 
  },
  impediments: { 
    type: String, 
    require: true, 
    validate: requireStringValidator 
  },
  createdOn: { type: String, default: Date.now }
})

module.exports = mongoose.model('Standup', standupSchema)
