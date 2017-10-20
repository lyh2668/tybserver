import Base from '../base'

// const shipListData = [
//   {
//     id: 0,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 0
//   }, {
//     id: 1,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 0
//   }, {
//     id: 2,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 0
//   }, {
//     id: 3,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 0
//   }, {
//     id: 4,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 0
//   }, {
//     id: 5,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 1
//   }, {
//     id: 6,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 1
//   }, {
//     id: 7,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 1
//   }, {
//     id: 8,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 1
//   }, {
//     id: 9,
//     title: '船用气象传真机SFAX-500',
//     picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
//     price: 0,
//     sales: 0,
//     shopid: 1
//   }
// ]
// const fishListData = [
//   {
//     id: 0,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 2
//   }, {
//     id: 1,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 2
//   }, {
//     id: 2,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 2
//   }, {
//     id: 3,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 2
//   }, {
//     id: 4,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 2
//   }, {
//     id: 5,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 3
//   }, {
//     id: 6,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 3
//   }, {
//     id: 7,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 3
//   }, {
//     id: 8,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 3
//   }, {
//     id: 9,
//     title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
//     picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
//     price: 120,
//     sales: 0,
//     shopid: 3
//   }
// ]

class Goods extends Base {
  constructor () {
    super()
    this.getList = this.getList.bind(this)
    this.getDetail = this.getDetail.bind(this)
    this.shipListData = this.createShipList()
    this.fishListData = this.createFishList()
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
      data: this.shipListData
    }
  }

  getFishList (params) {
    return {
      errcode: 0,
      errmsg: 'get fishlist success.',
      data: this.fishListData
    }
  }

  getShipDetail (params, id) {
    return {
      errcode: 0,
      errmsg: 'get ship detail success.',
      data: this.shipListData[id]
    }
  }

  getFishDetail (params, id) {
    return {
      errcode: 0,
      errmsg: 'get ship detail success.',
      data: this.fishListData[id]
    }
  }

  createFishList () {
    let list = []

    for (let i = 0; i < 10; ++i) {
      let item = {
        id: 0,
        title: '东海野生银鲳鱼 新鲜平鱼500g/3-4条海鱼水产海鲜鲜活',
        picture: 'http://tyb.allship.cn/Uploads/U/137/2017-09-14/59b9e4118418f_520_320.png',
        price: 120,
        sales: 0,
        shopid: 2
      }
      list.push(this.createItem(item, i))
    }

    return list
  }

  createShipList () {
    let list = []
  
    for (let i = 0; i < 10; ++i) {
      let item = {
        id: 0,
        title: '船用气象传真机SFAX-500',
        picture: 'http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png',
        price: 0,
        sales: 0,
        shopid: 0
      }
      list.push(this.createItem(item, i))
    }

    return list
  }

  createItem (item, i) {
    item.id = i
    item.title = `${item.title}[${i}]`
    item.price = Math.floor(Math.random() * 3) * 10
    item.shopid = Math.floor(Math.random() * 4)
    
    return item
  }
}

export default new Goods()
