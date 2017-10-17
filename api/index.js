import users from './users'
import express from 'express'
const router = express()

export default app => {
  app.use('/api', router)

  router.use('/users', users)
}
