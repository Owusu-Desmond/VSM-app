const { mongoose } = require('mongoose')
const Standup = require('../../models/standup')

module.exports = (router) => {
  // GET: 12 latest standup meetings notes
  router.get('/standups', async (req, res) => {
    try {
      const notes = await Standup.find().sort({ createdOn: 1 }).limit(12).exec()
      return res.status(200).json(notes)
    } catch (err) {
      return res.status(500).json({
        message: 'Error finding standup meetings',
        err
      })
    }
  })

  // GET: standup meetings notes by team member
  router.get('/standups/:teamMemberId', async (req, res) => {
    try {
      const query = {
        teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId) // convert string to ObjectId
      }
      const notes = await Standup.find(query).sort({ createdOn: 1 }).exec()
      return res.status(200).json(notes)
    } catch (err) {
      return res.status(500).json({
        message: 'Error finding standup meetings notes for team member',
        err
      })
    }
  })

  // POST: create new standup meeting note
  router.post('/standups', async (req, res) => {
    try {
      const newNote = new Standup(req.body)
      const note = await newNote.save()
      return res.status(200).json(note)
    } catch (err) {
      return res.status(400).json({
        message: 'Error creating new standup meeting note',
        err
      })
    }
  })

  // DELETE: delete standup meeting note
  router.delete('/standups/:id', async (req, res) => {
    try {
      const query = {
        _id: mongoose.Types.ObjectId(req.params.id) // convert string to ObjectId
      }
      const note = await Standup.deleteOne(query)
      return res.status(200).json(note)
    } catch (err) {
      return res.status(500).json({
        message: 'Error deleting standup meeting note',
        err
      })
    }
  })
}
