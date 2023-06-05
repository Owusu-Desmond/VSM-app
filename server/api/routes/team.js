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
      const member = new TeamMember(req.body)
      await member.save()
      return res.status(200).json(member)
    } catch (err) {
      return res.status(200).json(err)
    }
  })
}
