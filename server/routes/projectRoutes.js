import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import project from '../models/projectmodel.js'

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const projects = await project.find({})

    res.json(projects)
  })
)

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const projects = await project.findById(req.params.id)

    if (projects) {
      res.json(projects)
    } else {
      res.status(404).json({ message: 'project not found' })
    }
  })
)

export default router