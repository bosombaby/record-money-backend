const Router = require('@koa/router')
const router = new Router()

//导入路由
const userRouter = require('./modules/userService')

router.use('/user', userRouter.routes(), router.allowedMethods())

router.get('/', async (ctx) => {
  ctx.body = {
    code: 200,
    msg: '成功连接',
  }
})

module.exports = router
