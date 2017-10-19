const shipFavList = [
  {
    id: 0,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }
]

const fishFavList = [
  {
    id: 0,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }
]

class Users {
  constructor () {
    this.getUserinfo = this.getUserinfo.bind(this)
    this.getUserFav = this.getUserFav.bind(this)
  }
  async getUserinfo (req, res, next) {
    return res.json({
      errcode: 0,
      errmsg: 'ok',
      data: {
        id: 1,
        name: 'lyh2668',
        tel: '13512341234',
        thumb: 'http://http://tyb.allship.cn/Public/Center/images/avatar.png'
      }
    })
  }

  async getUserFav (req, res, next) {
    let params = req.query
    let type = parseInt(params.type)
    // 通过用户id和type去获取数据
    // let id = parseInt(params.id)
    let errmsg = ''
    let favList = {}

    switch (type) {
      case 0: {
        favList = shipFavList
        errmsg = 'get ship fav list ok.'
        break
      }
      case 1: {
        favList = fishFavList
        errmsg = 'get fish fav list ok.'
        break
      }
      default: {
        break
      }
    }

    return res.json({
      errcode: 0,
      errmsg: errmsg,
      data: favList
    })
  }
}

export default new Users()
