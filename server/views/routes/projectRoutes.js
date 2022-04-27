const express = require('express');
const router = express.Router()
router.use(express.json());
const {
  getprojects,
  getprojectById,
  deleteproject,
  createproject,
  updateproject,
} = require ('../controllers/projectController.js')

router.route('/').get(getprojects).post(createproject)

router.route('/:id').get(getprojectById).delete(deleteproject)
router.route('/').get(getprojects).post(createproject)
router
  .route('/:id')
  .get(getprojectById)
  .delete(deleteproject)
  .put(updateproject)

module.exports = router;