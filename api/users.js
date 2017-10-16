const express = require('express')
const router = express.Router()
const Users = require('../controllers/users')

router.get('/')
  .get(Users.login)
  .post((req, res, next) => {

  })

export default router
