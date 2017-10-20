import express from 'express'
import Shop from '../../controllers/store/shop'

const router = express.Router()

// 获取商铺信息
router.route('/')
  .get(Shop.getShopInfo)

export default router
