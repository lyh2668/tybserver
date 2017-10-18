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
    this.getDetail = this.getDetail.bind(this)
  }
  async getList (req, res, next) {
    let params = req.query
    let type = parseInt(params.type)
    let resJson = {}

    switch (type) {
      // 0 表示渔船
      case 0: {
        resJson = this.getShipsList(params, res)
        break
      }
      // 1 表示渔货
      case 1: {
        resJson = this.getFishList(params, res)
        break
      }
      default: {
        resJson = this.baseResponse(-1, 'type is error.')
      }
    }

    return res.json(resJson)
  }

  async getDetail (req, res, next) {
    let params = req.query
    let type = parseInt(params.type)
    let id = parseInt(params.id)
    let resJson = {}

    switch (type) {
      case 0: {
        resJson = this.getShipDetail(params, id)
        break
      }
      case 1: {
        resJson = this.getFishDetail(params, id)
        break
      }
      default: {
        resJson = this.baseResponse(-1, 'type is error.')
        break
      }
    }

    return res.json(resJson)
  }

  getShipsList (params) {
    return {
      errcode: 0,
      errmsg: 'get shoplist success.',
      data: shipListData
    }
  }

  getFishList (params) {
    return {
      errcode: 0,
      errmsg: 'get fishlist success.',
      data: fishListData
    }
  }

  getShipDetail (params, id) {
    return {
      errcode: 0,
      errmsg: 'get ship detail success.',
      data: fishListData[id]
    }
  }

  getFishDetail (params, id) {
    return {
      errcode: 0,
      errmsg: 'get ship detail success.',
      data: fishListData[id]
    }
  }

}

export default new Goods()
