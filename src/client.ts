import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'

export async function createClient() {
  const app = new Koa()

  app.use(serve(path.resolve(__dirname, '..', 'client')))

  app.listen(8080, () => {
    console.log('Client is running at http://localhost:8080')
  })
}
