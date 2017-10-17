import express from 'express'
import Admin from '../controllers/admin'

const router = express.Router()

router.route('/login')
  .get(Admin.login)
  .post((req, res, next) => {

  })

export default router
