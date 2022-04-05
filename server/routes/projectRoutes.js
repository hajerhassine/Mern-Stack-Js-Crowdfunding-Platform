import express from 'express'
const router = express.Router()
import {
  getprojects,
  getprojectById,
  deleteproject,
  createproject,
  updateproject,
} from '../controllers/projectController.js'


router.route('/').get(getprojects)
router.route('/:id').get(getprojectById).delete(deleteproject)
router.route('/').get(getprojects).post(createproject)
router
  .route('/:id')
  .get(getprojectById)
  .delete(deleteproject)
  .put(updateproject)

export default router