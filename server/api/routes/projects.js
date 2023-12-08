const Project = require('../../models/project')

module.exports = (router) => {
  // GET: list of active projects
  router.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find({ isActive: true }).sort({ name: 1 }).exec()
      return res.status(200).json(projects)
    } catch (err) {
      return res.status(500).json({
        message: 'Error finding active projects',
        err
      })
    }
  })

  // POST: create new project
  router.post('/projects', async (req, res) => {
    try {
      const project = new Project(req.body)
      await project.save()
      return res.status(200).json(project)
    } catch (err) {
      return res.status(400).json(err)
    }
  })
}
