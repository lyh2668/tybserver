import express from 'express'
import users from './users'
import admin from './admin'
const router = express()

export default app => {
  app.use('/api', router)

  router.use('/users', users)
  router.use('/admin', admin)
}
