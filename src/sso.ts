import Koa from 'koa'
import cors from '@koa/cors'
import Router from 'koa-router'

export function createSSO() {
  const app = new Koa()
  const router = new Router()

  router.get('/sso', (ctx, next) => {
    ctx.redirect('http://localhost:8081/result')
  })

  app.use(cors())
  app.use(router.routes()).use(router.allowedMethods())

  app.listen(8082, () => {
    console.log('Server is running at http://localhost:8082')
  })
}
