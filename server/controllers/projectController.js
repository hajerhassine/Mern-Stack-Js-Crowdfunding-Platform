import asyncHandler from 'express-async-handler'
import project from '../models/projectmodel.js'

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getprojects = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
  ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
  : {}

const projects = await project.find({ ...keyword })
  res.json(projects)
})
// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getprojectById = asyncHandler(async (req, res) => {
  const projects = await project.findById(req.params.id)
  if (projects) {
    res.json(projects)
  } else {
    res.status(404)
    throw new Error('project not found')
  }
})
// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteproject = asyncHandler(async (req, res) => {
  const projects = await project.findById(req.params.id)
  if (projects) {
    await projects.remove()
    res.json({ message: 'project removed' })
  } else {
    res.status(404)
    throw new Error('project not found')
  }
})


// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createproject = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
     image,
    // brand,
     category,
     p,
  } = req.body
  const projects = new project({
    name: name,
    price: price,
   // user: req.user._id,
    image: image,
    
    category: category,
    countInStock: 0,
    numReviews: 0,
    description: description,
  })

  const createdproject = await projects.save()
  res.status(201).json(createdproject)
})

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin

const updateproject = asyncHandler(async (req, res) => {

  const {
    name,
    price,
    // description,
     image,
    // brand,
    // category,
    // countInStock,
  } = req.body

  const projects = await project.findById(req.params.id)

  if (projects) {
    projects.name = name
    projects.price = price
  //   projects.description = description
    projects.image = image
  //  // project.brand = brand
  //   projects.category = category
  //   projects.p = p

    const updatedproject = await projects.save()
    res.json(updatedproject)
  } else {
    res.status(404)
    throw new Error('project not found')
  }
})

export {
  getprojects,
  getprojectById,
  deleteproject,
  createproject,
  updateproject,
}