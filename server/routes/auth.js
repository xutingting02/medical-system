import auth from '../controllers/user.js'
import koaRouter from 'koa-router'

const router = koaRouter()

router.get('/user/:id', auth.getUserInfo)
router.post('/user/login', auth.postUserAuth)
router.post('/user/register', auth.registerUser)

export default router
