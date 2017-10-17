import users from './users'

export default app => {
  app.use('/users', users)
}
