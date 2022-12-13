const router = require('koa-router')()
const api = require('./api')

router.get('/', async (ctx, next) => {
  const { data } = await api.user_list()
  ctx.body = data
})

module.exports = router
