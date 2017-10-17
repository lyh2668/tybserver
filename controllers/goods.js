import Base from './base'

const shipListData = [
  {
    id: 0,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 1,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 2,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 3,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 4,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 5,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 6,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 7,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 8,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }, {
    id: 9,
    title: '船用气象传真机SFAX-500',
    image: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
    price: 0,
    salesVolume: 0
  }
]
const fishListData = [
  {
    id: 0,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 1,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 2,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 3,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 4,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 5,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 6,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 7,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 8,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }, {
    id: 9,
    title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
    image: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
    price: 120,
    salesVolume: 0
  }
]

class Goods extends Base {
  constructor () {
    super()
    this.getList = this.getList.bind(this)
  }
  async getList (req, res, next) {
    let params = req.query
    let type = parseInt(params.type)

    switch (type) {
      // 0 表示渔船
      case 0: {
        return this.getShipsList(params, res)
      }
      // 1 表示渔货
      case 1: {
        return this.getFishList(params, res)
      }
      default: {
        return res.json(this.baseResponse(-1, 'type is error.'))
      }
    }
  }

  getShipsList (params, res) {
    return res.json({
      errcode: 0,
      errmsg: 'get shoplist success.',
      data: shipListData
    })
  }

  getFishList (params, res) {
    return res.json({
      errcode: 0,
      errmsg: 'get fishlist success.',
      data: fishListData
    })
  }

}

export default new Goods()
