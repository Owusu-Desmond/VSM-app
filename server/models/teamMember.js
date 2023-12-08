const mongoose = require('mongoose')
const { Schema } = mongoose

const sizeValidator = [
  function (val) {
    const testVal = val.trim()
    return (testVal.length > 0 && testVal.length <= 50)
  },
  // custom error text
  '{PATH} must be between 1 and 50 characters long'
]

const teamMemberSchema = new Schema({
  name: { 
    type: String,
    required: true,
    validate: sizeValidator
  },
  email: { 
    type: String,
    required: true,
    unique: true,
    validate: sizeValidator
  },
  password: { 
    type: String,
    required: true,
    validate: sizeValidator
  },
  role: { 
    type: String,
    required: true,
    validate: sizeValidator
  },
  createdOn: { type: String, default: Date.now }
})

module.exports = mongoose.model('TeamMember', teamMemberSchema)
