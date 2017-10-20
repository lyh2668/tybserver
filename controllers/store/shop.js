import Base from '../base'

const shopList = {
  0: {
    shopid: 0,
    shopname: "一横的杂货铺",
    shoplogo: "http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png",
    description: "这是一横的杂货铺"
  },
  1: {
    shopid: 1,
    shopname: "一竖的杂货铺",
    shoplogo: "http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png",
    description: "这是一竖的杂货铺"
  },
  2: {
    shopid: 2,
    shopname: "二横的杂货铺",
    shoplogo: "http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png",
    description: "这是二横的杂货铺"
  },
  3: {
    shopid: 3,
    shopname: "我的杂货铺",
    shoplogo: "http://tyb.allship.cn/Uploads/U/166/2017-09-28/59ccaab5a2be7_260_160.png",
    description: "这是我的杂货铺"
  }
}

class Shop extends Base {
  constructor () {
    super()
    this.getShopInfo = this.getShopInfo.bind(this)
  }

  /**
   * 获取商铺信息
   * shopid为商铺唯一标识
   */
  async getShopInfo (req, res, next) {
    let shopid = req.query.shopid

    if (shopid || shopid === 0) {
      return res.json(this.baseResponse(0, 'ok.', shopList[shopid]))
    } else {
      return res.json(this.baseResponse(-1, 'ship id error.'))
    }
  }
}

export default new Shop()
