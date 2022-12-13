const router = require('koa-router')()
const api = require('./api')

router.get('/', async (ctx, next) => {
  const data = await api.cors_user_del()
  ctx.body = data
})

module.exports = router
