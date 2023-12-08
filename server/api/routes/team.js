const TeamMember = require('../../models/teamMember')

module.exports = (router) => {
  // GET : List of teams members
  router.get('/team', async (req, res) => {
    try {
      const teamMembers = await TeamMember.find().sort({ name: 1 }).exec()
      return res.status(200).json(teamMembers)
    } catch (err) {
      return res.status(500).json({
        message: 'Error finding team members',
        err
      })
    }
  })

  // POST : Create new team member

  router.post('/team', async (req, res) => {
    try {
      console.log(req.body);
      const member = new TeamMember(req.body)
      await member.save()
      return res.status(200).json(member)
    } catch (err) {
      return res.status(200).json(err)
    }
  })

  router.delete('/team/:id', async (req, res) => {
    try {
      const member = await TeamMember.findByIdAndDelete(req.params.id)
      return res.status(200).json( { message: 'Team member deleted', member })
    } catch (err) {
      return res.status(200).json(err)
    }
  })

  // get a single team member
  router.get('/team/:id', async (req, res) => {
    try {
      const member = await TeamMember.findById(req.params.id)
      return res.status(200).json(member)
    } catch (err) {
      return res.status(200).json(err)
    }
  })

  // get a team member standup meetings

  router.get('/team/:id/standups', async (req, res) => {
    try {
      const member = await TeamMember.findById(req.params.id).populate('standups') // populate the standups field in the team member model to get the standup meetings for the team member
      if (!member) return res.status(404).json({ message: 'Team member not found' })
      if (!member.standups) return res.status(404).json({ message: 'No standups found for this team member' })
      return res.status(200).json(member.standups)
    } catch (err) {
      return res.status(200).json(err)
    }
  })
}
