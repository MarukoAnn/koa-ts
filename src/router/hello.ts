import * as Router from "koa-router"
import homeController from '../controller/homeController'
const helloRouter = new Router({
    prefix: '/api'
});

helloRouter.get('/hello',  new homeController().hello)
helloRouter.post('/login',  new homeController().login)
export default helloRouter;