import Base from './base'

class Admin extends Base {
  constructor () {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  async login (req, res, next) {
    let params = req.query
    let errcode = 0
    let errmsg = 'ok'
    if (params.username !== 'admin') {
      errcode = -1
      errmsg = '账号或密码错误'
    }
    return res.json({
      errcode: errcode,
      errmsg: errmsg,
      data: {
        token: '123456'
      }
    })
  }
  async logout (req, res, next) {
    console.log(this.baseResponse())
    return res.json(this.baseResponse())
  }
}

export default new Admin()
