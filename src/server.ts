import Koa from 'koa'
import cors from '@koa/cors'
import Router from 'koa-router'

export function createServer() {
  const app = new Koa()
  const router = new Router()

  router.get('/redirect', (ctx, next) => {
    ctx.redirect('http://localhost:8082/sso')
  })

  router.get('/result', (ctx, next) => {
    ctx.status = 200
    ctx.body = {
      code: 200,
      data: true,
    }
  })

  app.use(cors())
  app.use(router.routes()).use(router.allowedMethods())

  app.listen(8081, () => {
    console.log('Server is running at http://localhost:8081')
  })
}
