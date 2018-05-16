import Koa from 'koa'
import Router from 'koa-router'
import auth from './server/routes/auth.js'
import koaBodyparser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import path from 'path'
import serve from 'koa-static'
import jwt from 'koa-jwt'


const app = new Koa()
const router = Router()

app.use(koaBodyparser())
app.use(json())
app.use(logger())

app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});

app.use(jwt({ secret: 'vue-koa-demo' }).unless({ path: [/^\/auth/] }));

router.use('/auth', auth.routes())

app.use(router.routes())

export default app.listen(8889, () => {
    console.log('Koa is listening in 8889')
})