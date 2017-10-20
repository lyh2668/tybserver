import express from 'express'
import Goods from '../../controllers/store/goods'

const router = express.Router()

router.route('/')
  .get(Goods.getList)

router.route('/detail')
  .get(Goods.getDetail)

export default router
