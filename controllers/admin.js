class Admin {
  constructor () {
    this.login = this.login.bind(this)
  }
  async login (req, res, next) {
    return res.json({
      errcode: 0,
      errmsg: 'ok',
      data: {
        token: '123456'
      }
    })
  }
}

export default new Admin()
