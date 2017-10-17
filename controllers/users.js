class Users {
  constructor () {
    this.getUserinfo = this.getUserinfo.bind(this)
  }
  async getUserinfo (req, res, next) {
    return res.json({
      errcode: 0,
      errmsg: 'ok',
      data: {
        name: 'lyh2668',
        tel: '13512341234'
      }
    })
  }
}

export default new Users()
