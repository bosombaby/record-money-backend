const Router = require('@koa/router')
const router = new Router()
const query = require('../../db/connect')

let queryAll = 'select * from user_info'

router.get('/all', async (ctx) => {
  let res = await query(queryAll)
  ctx.body = {
    code: 200,
    data: res,
  }
})
module.exports = router
