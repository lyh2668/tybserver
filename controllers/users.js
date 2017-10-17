class Users {
  constructor () {
    this.login = this.login.bind(this)
  }
  async login (req, res, next) {
    return res.json({
      errcode: 'msg'
    })
  }
}

export default new Users()
