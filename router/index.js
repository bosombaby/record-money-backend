const Router = require('@koa/router')
const router = new Router()

//导入路由
const userRouter = require('./modules/userService')

router.use('/user', userRouter.routes(), router.allowedMethods())

module.exports = router
