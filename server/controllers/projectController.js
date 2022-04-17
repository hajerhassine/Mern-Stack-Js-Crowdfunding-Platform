const asyncHandler =require ('express-async-handler')
const project =require ('../models/projectmodel.js')

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
     username,
    Userid,
     category,
     video,
     p,
  } = req.body
  const projects = new project({
    name: name,
    price: price,
    creator:Userid,
    image: image,
    video:video,
    creatorname: username,
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
}
)
// @desc    Create new review
// @route   POST /api/projects/:id/reviews
// @access  Private
const createprojectReview = asyncHandler(async (req, res) => {
  const { rating, comment ,username ,Userid } = req.body

  const projects = await project.findById(req.params.id)

  if (projects) {
    const alreadyReviewed = projects.reviews.find(
      (r) => r.creator.toString() === Userid.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('project already reviewed')
    }

    const review = {
      name: username,
      rating: Number(rating),
      comment :comment,
      creator: Userid ,
    }

    projects.reviews.push(review)

    projects.numReviews = projects.reviews.length

    projects.rating =
      projects.reviews.reduce((acc, item) => item.rating + acc, 0) /
      projects.reviews.length

    await projects.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('project not found')
  }
})

module.exports = {
  getprojects,
  getprojectById,
  deleteproject,
  createproject,
  updateproject,
  createprojectReview,
}